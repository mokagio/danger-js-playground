import {warn, danger} from "danger";

export async function checkMilestone() {
  // Warn if the PR doesn't have a milestone
  const issue = await danger.github.api.issues.get(danger.github.thisPR);
  if (issue.data.milestone == null) {
    warn("PR is not assigned to a milestone.");
  }

  // TODO: Add example of skipping this check if the PR branch name matches a
  // pattern or if there's a certain label.
};

// Not exactly sure why, but in order for the multiple files + import setup to
// work we need to split the export of this function and its declaration as the
// default export. I'm guessing it has to do with how TypeScript resolves
// these?
export default checkMilestone
