export default async () => {
  // The imports need to be done within this async function.
  const {checkLabel} = await import("./label.ts")
  const {checkMilestone} = await import("./milestone.ts")

  await checkLabel()
  await checkMilestone()
}
