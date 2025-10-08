import { createMiddleware } from "@tanstack/react-start";

export const am = createMiddleware({ type: "function" }).server(async ({ next }) => {
  console.log("middleware")
  return next({ context: { val: "middleware context" } })
})
