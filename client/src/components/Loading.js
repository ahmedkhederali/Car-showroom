import React from 'react'
import {Spin} from "antd"
function Loading() {
  return (
    <div className='spinner'>
    <Spin size='large'/>
    </div>
  )
}

export default Loading