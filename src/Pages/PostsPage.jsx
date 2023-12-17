// Exercise 5:

import {
  Card,
  CardContent,
  Grid,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { Outlet, useParams, Link, useSearchParams } from "react-router-dom";
import { useData } from "../components/Hooks/UseData";

export default function PostsPage() {
  return (
    <div className="Posts">
      {" "}
      <h1>Posts</h1> <Outlet />{" "}
    </div>
  );
}

export function PostList() {
  // updated from slide 60, replace old version
  const [searchParams, setSearchParams] = useSearchParams(); // import this hook
  const limit = searchParams.get("limit") ? searchParams.get("limit") : 5;
  const postsData = useData(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  );

  const handleChangeLimit = (e) => {
    setSearchParams({ limit: e.target.value });
  };

  // the ? means only call map if postsData is not null
  // const postList = postsData?.map((post) => (
  //   <li key={post.id}>
  //     {" "}
  //     <Link to={"/posts/" + post.id}>
  //       {" "}
  //       Post #{post.id}: {post.title}
  //     </Link>{" "}
  //   </li>
  // ));

  return (
    <>
      <Select value={limit} onChange={handleChangeLimit}>
        <MenuItem value={5}>5 Posts</MenuItem>
        <MenuItem value={10}>10 Posts</MenuItem>
        <MenuItem value={20}>20 Posts</MenuItem>
      </Select>
      <Grid container spacing={2}>
        {postsData?.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  <Link to={`/posts/${post.id}`}>
                    Post #{post.id}: {post.title}
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
// ++ Change the ‘Load 10 Posts’ link to a drop-down allowing users to choose
// 5, 10 or 20 posts. Use the handleChangeLimit function in the onChange event.

export function Post() {
  const { id } = useParams(); // custom hook to access dynamic params
  const post = useData("https://jsonplaceholder.typicode.com/posts/" + id);
  return (
    <div className="Post">
      {post ? (
        <>
          <h3>
            Post #{post.id}: {post.title}
          </h3>{" "}
          <p>{post.body}</p>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
