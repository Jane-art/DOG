import React, {useState} from "react";
// import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

// const data = ["Cat", "Dog", "Parrot", "Humster", "Human", "Mouse" , "Rabbit", "Pig" ];
// const dataCards = data.map((pet,i )=> <Card text = {pet} key= {i}/>);

const App = () => {
    const [searchText, changeText] = useState("");
    return (
        <div className="container">
            <Header searchText ={searchText} changeText={changeText}/>
            {/*<Card />*/}
            {/* {dataCards} */}
            {searchText && <div>Вы ищите {searchText}</div>}
            <Main search={searchText}/>
            <Footer />
        </div>
    )
}

export default App;
