import { Route, Routes } from "react-router";
import Home from "../pages/home";
import TodoDetails from "../pages/details";

const RoutesComp = () => {

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:todoId" element={<TodoDetails />} />
        </Routes>
    )
}
export default RoutesComp;
