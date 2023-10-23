import { Outlet, useParams, Link, useSearchParams } from "react-router-dom";
import { useData } from "../Hooks/UseData";

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
    "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
  );
  const handleChangeLimit = (e) => {
    setSearchParams({ limit: e.target.value });
  };
  // the ? means only call map if postsData is not null
  const postList = postsData?.map((post) => (
    <li key={post.id}>
      {" "}
      <Link to={"/posts/" + post.id}>
        {" "}
        Post #{post.id}: {post.title}
      </Link>{" "}
    </li>
  ));
  return (
    <>
      <ul>{postList}</ul> <Link to="/posts?limit=100">Load 100 Posts</Link>
      <input
        type={"number"}
        defaultValue={null}
        onChange={handleChangeLimit}
      ></input>
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
        "Loading ..."
      )}
    </div>
  );
}
