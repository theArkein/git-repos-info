import { IssuesPage } from "..";
import { urls } from "../../../config";
import {
  issuesAtomMock,
  issuesMock,
  openIssuesMock,
  queryAtomMock,
  statusAtomMock,
} from "../../../mocks/mock";
import { getIssuesUrl } from "../../../utils/index.utils";
import { render, screen, userEvent } from "../../../utils/test.utils";

describe("Issues Page", async () => {
  const options = {
    atom: [issuesAtomMock, queryAtomMock, statusAtomMock],
  };

  it("should render successfully", () => {
    render(<IssuesPage />, options);
  });

  it("should search and display issues", async () => {
    render(<IssuesPage />, options);
    expect(screen.getByText("No results found.")).toBeInTheDocument();
    const queryInput = screen.getByPlaceholderText(
      `eg: ${urls.githubExampleUrl}`
    );
    await userEvent.type(queryInput, getIssuesUrl("nodejs", "node"));
    await userEvent.click(screen.getByRole("button"));
    expect(screen.queryByText("No results found.")).not.toBeInTheDocument();
    expect((await screen.findAllByTestId("issue-title"))[0]).toHaveTextContent(
      issuesMock[0].title
    );
    expect(screen.getAllByTestId("issue-title")).toHaveLength(issuesMock.length);
  });

  it("should filter and display issues", async () => {
    render(<IssuesPage />, options);
    const queryInput = screen.getByPlaceholderText(
      `eg: ${urls.githubExampleUrl}`
    );
    await userEvent.type(queryInput, getIssuesUrl("nodejs", "node"));
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getAllByTestId("issue-title")).toHaveLength(issuesMock.length);

    const option = screen.getByRole("listbox")
    await userEvent.selectOptions(option, ['open'])
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getAllByTestId("issue-title")).toHaveLength(openIssuesMock.length);
    expect(screen.getAllByTestId("issue-title")[0]).toHaveTextContent(openIssuesMock[0].title);
  });
});
