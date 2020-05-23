// The import is not required for the file to run standalone and it actually
// results in a runtime error when importing this file.
//
import {warn, danger} from "danger";

export async function checkLabel() {
  const labels = danger.github.issue.labels;

  // Warn if the PR doesn't have any labels
  if (danger.github.issue.labels.length == 0) {
    warn("PR is missing at least one label.");
  }

  // TODO: Add example of how to check the label values to make more specific
  // warnings
};

// Not exactly sure why, but in order for the multiple files + import setup to
// work we need to split the export of this function and its declaration as the
// default export. I'm guessing it has to do with how TypeScript resolves
// these?
export default checkLabel
