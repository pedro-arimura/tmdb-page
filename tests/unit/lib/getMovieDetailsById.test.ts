import { getMovieDetailsById } from "@/lib/tmdb";

global.fetch = jest.fn();

describe("getMovieDetailsById", () => {
  it("returns movie details when the fetch succeeds", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        id: 123,
        title: "Interstellar",
        videos: { results: [] },
      }),
    });

    const result = await getMovieDetailsById("123");

    expect(result.id).toBe(123);
    expect(result.title).toBe("Interstellar");
  });

  it("throws an error when the API returns ok = false", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({}),
    });

    await expect(getMovieDetailsById("123")).rejects.toThrow(
      "Failed to get movie details."
    );
  });

  it("throws an error when fetch rejects (network error)", async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error("Network error"));

    await expect(getMovieDetailsById("123")).rejects.toThrow("Network error");
  });
});
