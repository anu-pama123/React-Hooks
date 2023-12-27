import { useContext } from "react";
import { userContext } from "./component1";

const Component5 = () => {
    const user = useContext(userContext);
    return (
        <div>
            <div className='name-section'>My name is - {user}</div>
        </div>
    )
}

export default Component5;