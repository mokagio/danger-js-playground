export default async () => {
  // The imports need to be done within this async function.
  const {checkLabel} = await import("./label")
  const {checkMilestone} = await import("./milestone")

  await checkLabel()
  await checkMilestone()
}
