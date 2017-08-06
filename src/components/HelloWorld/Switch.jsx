import React from "react"

const clickTest = () => { 
  console.debug("CLICK")
}


export default function (props: any): ?React$Element<any> {
  if (props.state == 0) {
    return <img height="200px" src="/switch-off.jpg" onClick={() => props.toggle()} />
  }
  return <img height="200px" src="/switch-on.jpg" onClick={() => props.toggle()} />
}
