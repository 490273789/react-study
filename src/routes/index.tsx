import React from "react"
import { lazy, useState, useEffect } from "react"
import { Navigate, createBrowserRouter } from "react-router-dom"

import Layout from "@/layout"

export interface MetaProps {
  keepAlive?: boolean
  requiresAuth?: boolean
  title: string
  key?: string
}

interface IRouteObject {
  caseSensitive?: boolean
  children?: IRouteObject[]
  element: React.ReactNode
  index?: false
  path: string
  meta?: MetaProps
  isLink?: string
}

const Jsx = lazy(() => import(`@/views/jsx`))
const Event = lazy(() => import(`@/views/event`))
const This = lazy(() => import(`@/views/this`))
const State = lazy(() => import(`@/views/state`))
const Drag = lazy(() => import(`@/views/drag`))
const Form = lazy(() => import(`@/views/form`))
const Animation = lazy(() => import(`@/views/animation`))
const ReactRouter = lazy(() => import(`@/views/reactRouter`))
const PageOne = lazy(() => import(`@/views/reactRouter/pageOne`))
const PageTwo = lazy(() => import(`@/views/reactRouter/pageTwo`))
const PageThree = lazy(() => import(`@/views/reactRouter/pageThree`))
const Hooks = lazy(() => import(`@/views/hooks`))
const UseCallback = lazy(() => import(`@/views/hooks/useCallbackDemo`))
const UiComponent = lazy(() => import(`@/views/uiComponent`))
const Zustand = lazy(() => import(`@/views/zustand`))
const ReactSpring = lazy(() => import(`@/views/animation/react-spring`))
const Common = lazy(() => import(`@/views/common`))
const routes: IRouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    meta: { title: "首页" },
    children: [
      {
        path: "/",
        element: <Jsx />,
        meta: { title: "jsx" }
      },
      {
        path: "/event",
        element: <Event />,
        meta: { title: "事件" }
      },
      {
        path: "/this",
        element: <This />,
        meta: { title: "this" }
      },
      {
        path: "/state",
        element: <State />,
        meta: { title: "state & props" }
      },
      {
        path: "/drag",
        element: <Drag />,
        meta: { title: "useDrag" }
      },
      {
        path: "/form",
        element: <Form />,
        meta: { title: "useForm" }
      },
      {
        path: "/animation",
        element: <Animation />,
        meta: { title: "useAnimation" }
      },
      {
        path: "/reactRoute",
        element: <ReactRouter />,
        meta: { title: "reactRoute" },
        children: [
          {
            path: "pageOne",
            element: <PageOne />,
            meta: { title: "pageOne" }
          },
          {
            path: "pageTwo/:id",
            element: <PageTwo />,
            meta: { title: "pageTwo" }
          },
          {
            path: "pageThree",
            element: <PageThree />,
            meta: { title: "pageThree" }
          }
        ]
      },
      {
        path: "/hooks",
        element: <Hooks />,
        meta: { title: "hooks" }
      },
      {
        path: "/use-callback",
        element: <UseCallback />,
        meta: { title: "useCallback" }
      },
      {
        path: "/ui-component",
        element: <UiComponent />,
        meta: { title: "自定义组件" }
      },
      {
        path: "/zustand",
        element: <Zustand />,
        meta: { title: "zustand" }
      },
      {
        path: "/react-spring",
        element: <ReactSpring />,
        meta: { title: "react-spring" }
      },
      {
        path: "/common",
        element: <Common />,
        meta: { title: "common" }
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/" />
  }
]

const getChildRoute = (routes: IRouteObject[], path: string) => {
  const queue: IRouteObject[] = [...routes]
  while (queue.length > 0) {
    const route = queue.shift()
    if (route?.path === path) {
      return route?.children ?? []
    }
    if (route?.children) {
      for (let i = 0, len = route?.children.length; i < len; i++) {
        queue.push(route?.children[i])
      }
    }
    return []
  }
}

export const useChildRoute = (path: string) => {
  const [route, setRoute] = useState<IRouteObject[]>([])
  useEffect(() => {
    const childRoute = getChildRoute(routes, path) ?? []
    setRoute(childRoute)
  }, [path])

  return route
}

const finalRoutes = createBrowserRouter(routes)

export default finalRoutes
