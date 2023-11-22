import { Route, Routes } from "react-router";
import Home from "../pages/home";
import TodoDetails from "../pages/details";

const RoutesComp = () => {

    return(
        <Routes>
            <Route path="/poc_cypress_todo_app" element={<Home />} />
            <Route path="/poc_cypress_todo_app/detail/:todoId" element={<TodoDetails />} />
        </Routes>
    )
}
export default RoutesComp;
