import { render, screen } from "@testing-library/react";
import MovieCard from "@/components/MovieCard";

const movie = {
  id: 1,
  title: "Chappie",
  poster_path: "/chappie.jpg"
};

describe("MovieCard", () => {
  it("renders the MovieCard to test it.", () => {
    render(<MovieCard movie={movie} />);

    const img = screen.getByAltText("Chappie");
    expect(img).toBeInTheDocument();
    expect(img.getAttribute("src")).toContain("chappie.jpg");
  });
});
