import { urls } from "../../../../../config";
import { issuesAtomMock, queryAtomMock, statusAtomMock } from "../../../../../mocks/mock";
import { render, screen, userEvent } from "../../../../../utils/test.utils";
import { Filters } from "../filters";


describe("Issues Page", async () => {
  const options = {
    atom: [issuesAtomMock, queryAtomMock, statusAtomMock],
  };

  it("should render successfully", () => {
    render(<Filters />, options)
  });

  it("should validate query url", async () => {
    render(<Filters />, options);
    const queryInput = screen.getByPlaceholderText(
      `eg: ${urls.githubExampleUrl}`
      );
      await userEvent.type(queryInput, "invalid")
      await screen.findByText("Invalid URL")

      userEvent.clear(queryInput)
      await userEvent.type(queryInput, "https://github")
      expect(screen.queryByText("Invalid URL")).not.toBeInTheDocument()
      await screen.findByText("Given URL is not valid github origin")

      userEvent.clear(queryInput)
      await userEvent.type(queryInput, "https://github.com")
      expect(screen.queryByText("Given URL is not valid github origin")).not.toBeInTheDocument()
      await screen.findByText("Given URL must have username and repo name only")

      userEvent.clear(queryInput)
      await userEvent.type(queryInput, "https://github.com/nodejs/node")
      expect(screen.queryByText("Given URL must have username and repo name only")).not.toBeInTheDocument()
      
  });
});
