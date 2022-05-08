import React, {useState} from "react";
import "./index.css";

const Search = () => {
    const [val,updateVal] = useState("tralalal"); //хук сoстояния //onInput, onChange, onBlur, onFocus
    const changeText =(e) => {
        updateVal(e.target.value); //вызвать функцию updateVal и передать в неё новое значение переменной val
    }
    return (
        <form>
            <input type="text" value={val} onInput={changeText}/>
            <div>{val}</div>
        </form>
    )
}
export default Search;
