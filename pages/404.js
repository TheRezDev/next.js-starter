import Link from "next/link";

const NotFound = () => {
    return ( 
        <div>
            <h1>This page is not found </h1>
            <Link href="/">
                go to home page 
            </Link>
        </div>
    );
}

export default NotFound;