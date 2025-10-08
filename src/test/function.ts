import { createServerFn } from "@tanstack/react-start";
import { am } from "./middleware";

export const fnWithMiddleware = createServerFn()
  .middleware([am])
  .handler(async ({ context }) => {
    console.log("fn with middleware, context:", JSON.stringify(context))
    return "with middleware"
  })

export const fnWithoutMiddleware = createServerFn()
  .handler(async () => {
    console.log("fn with no middleware")
    return "no middleware"
  })
