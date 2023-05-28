import { issuesAtomMock, issuesMock } from "../../../../../mocks/mock";
import { render, screen } from "../../../../../utils/test.utils";
import { DetailsLists } from "../details-list";

describe("IssuesDetailsList", async () => {
  const options = {
    atom: [issuesAtomMock],
  }

  it("should render successfully", () => {
    render(<DetailsLists />, options );
  })

  it("should render list correctly", () => {
    render(<DetailsLists />, options);
    expect(screen.getByTestId("list")).toBeInTheDocument();
    expect(screen.getAllByTestId("list-item")).toHaveLength(issuesMock.length);
    expect(screen.getAllByTestId("issue-title")[0]).toHaveTextContent(
      issuesMock[0].title
    );
    expect(screen.getAllByTestId("issue-title")[3]).toHaveTextContent(
      issuesMock[3].title
    );
  });
});
