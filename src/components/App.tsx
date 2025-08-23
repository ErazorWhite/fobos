import {Routes, Route} from "react-router";
import {Layout} from "_/components/Layout";
import HomePage from "_/components/pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const GenericPage = () => <div>Generic page by :pageId</div>;

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>

                {/* Main page */}
                <Route index element={<HomePage/>}/>

                {/* Side pages */}
                <Route path=":pageId" element={<GenericPage/>}/>


                {/* 404 */}
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;
