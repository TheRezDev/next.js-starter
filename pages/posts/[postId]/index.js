import { useRouter } from "next/router";
import Link from 'next/link';
const Post = () => {
    const router = useRouter();

    const {postId} = router.query;
    return ( 
        <div>
            <h1>this is post page - {postId} </h1>
            <Link href="/">
                go to home page 
            </Link>
        </div>
    );
};

export default Post;
