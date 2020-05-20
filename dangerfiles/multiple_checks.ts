// When importing a single file, the following syntax works too, but when 
// importing more, it doesn't.
//
// import {checkMilestone} from "./milestone"
//
// Could it have to do with the fact that they're both exported as default?
// So far, I've left the `export default` becuase it allows the source to be
// run as a standalone Dangerfile
import checkMilestone from "./milestone"
import checkLabel from "./label"

export default async () => {
  await checkLabel()
  await checkMilestone()
}
