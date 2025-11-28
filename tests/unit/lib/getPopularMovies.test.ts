import { getPopularMovies } from "@/lib/tmdb";

global.fetch = jest.fn();

describe("getPopularMovies", () => {
  it("return a list of popular movies if succeded", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ results: [{ id: 1, title: "Test Movie" }] }),
    });

    const result = await getPopularMovies();

    expect(result.results.length).toBe(1);
    expect(result.results[0].title).toBe("Test Movie");
  });

  it("throw an error when the fetch fails", async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error("Network error"));

    await expect(getPopularMovies()).rejects.toThrow("Network error");
  });
});
