import { Routes, Route } from "react-router-dom";
import Homepage, { NicolePage } from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import DashboardPage from "../Pages/DashboardPage";
import DashboardMessages from "../Pages/DashboardMessages";
import DashboardTasks from "../Pages/DashboardTasks";
import PageNotFound from "../Pages/PageNotFound";
import TodoPage from "../Pages/TodoPage";
import ReduxTodoList from "../components/ReduxTodoList";
import PostsPage, { Post, PostList } from "../Pages/PostsPage";
import ProtectedRoute from "./ProtectedRoute";
import LoginForm from "../Pages/LoginForm";
import MUIDemo from "../Pages/MUI";

// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto
// child components using {...props}
function AppRoutes(props) {
  return (
    <Routes>
      {/* index matches on default/home URL: / */}
      <Route index element={<Homepage {...props} />} />
      <Route path="Nicole" element={<NicolePage />}></Route>
      <Route path="todo" element={<TodoPage></TodoPage>}></Route>
      {/* nested routes, matches on /dash/tasks etc */}
      <Route path="MUIDemo" element={<MUIDemo></MUIDemo>}></Route>
      <Route path="dash" element={
          <ProtectedRoute>
            <DashboardPage {...props} />
          </ProtectedRoute>}>
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
      {/* <Route path="login" element={<LoginForm />} /> */}
      <Route path="/about" element={<AboutPage {...props} />} />
      {/* special route to handle if none of the above match */}
      <Route path="todoRedux" element={<ReduxTodoList {...props} />} />
      <Route path="/posts" element={<PostsPage {...props} />}>
        <Route index element={<PostList />} />
        {/* dynamic param taken from route, stored in variable called id */}
        <Route path=":id" element={<Post />} />{" "}
      </Route>
      <Route path="login" element={<LoginForm />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
