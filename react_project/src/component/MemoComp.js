import React from 'react'

function MemoComp({name}) {
    console.log("memoComponent")
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default React.memo(MemoComp)
