import {memo} from "react"

const ComponentA = ({data, value}) => {
    console.log("==> ")
    return (
        <div>
            <button className='button' onClick={() => data()}>{value}</button>
        </div>
    )
}

export default memo(ComponentA);