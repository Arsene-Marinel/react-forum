import ListPosts from "../components/ListPosts";

const Home = (isAuth) => {
    return <ListPosts isAuth={isAuth} />
};

export default Home;