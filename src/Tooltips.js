import React from 'react'

function Tooltips({positon}) {
  return (
    <div class="tooltip">Hover over me
        <span class={`tooltiptext ${positon}`}>Tooltip text</span>
    </div>
  )
}

export default Tooltips