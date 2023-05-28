import { rest } from "msw";
import { issuesMock, openIssuesMock } from "./mock";
import { urls } from "../config";

const getIssuesHandler = rest.get(
  `${urls.githubAPIOrigin}/repos/nodejs/node/issues`,
  (req, res, ctx) => {
    const state = req.url.searchParams.get("state");
    if (state === "open") {
      return res(ctx.status(200), ctx.json(openIssuesMock));
    }
    return res(ctx.status(200), ctx.json(issuesMock));
  }
);

export const handlers = [getIssuesHandler];
