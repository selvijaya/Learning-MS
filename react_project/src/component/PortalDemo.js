// import React from 'react'

// function PortalDemo() {
//   return (
//     <div>
//       <h1>Priya Dharshini</h1>
//     </div>
//   )
// }

// export default PortalDemo

import React from 'react'
import ReactDom from 'react-dom'

function PortalDemo() {
  return ReactDom.createPortal (
    <div>
       <h1>Jenith is a Mental</h1>,
       <h1>priyaDharshini is a looser and Mental</h1>
       <h1>maha is very Bad Girl</h1>
    </div>,
    document.getElementById('portal-root')
  )
}

export default PortalDemo
