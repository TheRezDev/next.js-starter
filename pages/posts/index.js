import Link from 'next/link';

const PostList = () => {
    return (
        <div>
            <h1>this is a list page</h1>
            <h2>
            <Link href="/posts/1">
                paost-1
            </Link>
            </h2>
            <h2>
            <Link href="/posts/2">
                paost-2
            </Link>
            </h2>
            <h2>
            <Link href="/posts/3" replace>
                paost-3
            </Link>
            </h2>
        </div>
    );
};

export default PostList;
