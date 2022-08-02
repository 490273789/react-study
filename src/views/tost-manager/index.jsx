
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const ToastMsg = ({children}) => {
  return (
    <div className='toast-msg'>{children}</div>
  )
}

const ToastContainer = forwardRef((props, ref) => {
  const [toastList, setToastList] = useState([])

  // 在函数组件中配合forwardRef使用，可以自定义ref中的属性
  useImperativeHandle(ref, () => ({
    info: (msg) => setToastList(state => [...state, msg])
  }))

  return (
    <div>
      {
        toastList.map((msg, index) => (
          <ToastMsg key={index}>{msg}</ToastMsg>
        ))
      }
    </div>
  )
})

export const toast = {current: null}
const ToastManager = () => {
  const ref = useRef()

  useEffect(() => {
    toast.current = ref.current.info
  }, [])
  return (
    <ToastContainer ref={ref}/>
  )
}

export default ToastManager