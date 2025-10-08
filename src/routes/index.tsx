import { fnWithMiddleware, fnWithoutMiddleware } from '@/test/function'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

const options = queryOptions({
  queryKey: ['fn'],
  queryFn: fnWithoutMiddleware
})

export const Route = createFileRoute('/')({
  component: App,
  // beforeLoad: async ({ context }) => {
  //   const resp = await context.queryClient.fetchQuery(options)
  //   return resp
  // }
})

function App() {
  const { data } = useQuery(options)

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div>
        hi {data}
      </div>
    </div>
  )
}
