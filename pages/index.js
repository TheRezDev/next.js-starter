import Link from "next/link";
const HomePage = () => {
    return ( 
        <div>
        <h1>home page</h1>
        <Link  href="/posts">
            got to posts page?
        </Link>
        </div>
    );
};

export default HomePage;