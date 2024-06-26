import { Suspense } from "react"
import { RouterProvider } from "react-router-dom"
import Loading from "./components/Loading"
import routes from "@/routes"
import "cropperjs/dist/cropper.css"

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <RouterProvider router={routes} />
      </Suspense>
    </div>
  )
}
export default App
