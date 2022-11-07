import Nav from "../nav";
import Assignment6 from "./a6";
import Assignment7 from "./a7/index";
import {Routes, Route} from "react-router";

function Labs() {
    return (
        <div>
            <Nav/>
            <Routes>
                <Route index element={"This is the index page. Please select the assignment using the above links. Note that tuiter have the links, use the back arrow to return here"}/>
                <Route path="a6"
                       element={<Assignment6/>}/>
                <Route path="a7"
                       element={<Assignment7/>}/>
            </Routes>
        </div>
    );
}

export default Labs;

