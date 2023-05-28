import { issuesAtomMock, issuesMock } from "../../../../../mocks/mock";
import { render, screen } from "../../../../../utils/test.utils";
import { StatusList } from "../status-list";

describe("IssuesStatusList", async () => {
  it("should render successfully", () => {
    render(<StatusList />, {
      atom: [issuesAtomMock],
    });
    expect(screen.getByTestId("list")).toBeInTheDocument();
    expect(screen.getAllByTestId("list-item")).toHaveLength(issuesMock.length);
  });
});
