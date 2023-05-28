import {
  issuesQueryAtom,
  queryFilterAtom,
  statusFilterAtom,
} from "../components/pages/issues/store/index.store";
import { IssueType } from "../components/pages/issues/types";
import { urls } from "../config";

export const issueMock: IssueType = {
  id: 1,
  number: 501,
  title: "Types not getting imported",
  created_at: new Date(),
  closed_at: undefined,
  state: "open",
  user: {
    login: "theArkein",
    html_url: `${urls.githubOrigin}/theArkein`,
  },
};

export const closedIssueMock: IssueType = {
  id: 2,
  number: 502,
  title: "test: fix zlib version regex",
  created_at: "2023-02-28T00:26:00Z",
  closed_at: "2023-04-15T00:26:00Z",
  state: "closed",
  user: {
    login: "theArkein",
    html_url: `${urls.githubOrigin}/theArkein`,
  },
};

export const issuesMock: IssueType[] = [
  issueMock,
  closedIssueMock,
  {
    id: 3,
    number: 503,
    title: "deps: update ada to 2.5.0",
    user: {
      login: "nodejs-github-bot",
      html_url: "https://github.com/nodejs-github-bot",
      //   avatar_url: "https://avatars.githubusercontent.com/u/18269663?v=4",
    },
    state: "open",
    created_at: "2023-05-28T00:26:00Z",
  },
  {
    id: 4,
    number: 504,
    title: "deps: update zlib to 337322d",
    user: {
      login: "lpinca",
      html_url: "https://github.com/nodejs-github-bot",
      //   avatar_url: "https://avatars.githubusercontent.com/u/18269663?v=4",
    },
    state: "closed",
    created_at: "2023-05-28T00:25:58Z",
    closed_at: "2023-08-01T00:25:58Z",
  },
];

export const closedIssuesMock = issuesMock.filter(
  (issue) => issue.state === "closed"
);

export const openIssuesMock = issuesMock.filter(
  (issue) => issue.state === "open"
);

export const issuesAtomMock = [
  issuesQueryAtom,
  {
    data: issuesMock,
    loading: false,
    error: "",
  },
];

export const queryAtomMock = [queryFilterAtom, ""];
export const statusAtomMock = [statusFilterAtom, "all"];
