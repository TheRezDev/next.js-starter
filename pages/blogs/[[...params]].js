/* catch all routes  */

import { useRouter } from "next/router";

const Blog = () => {
    const router = useRouter();
    console.log(router.query)
    const {params} = router.query;

    return (   <h1>catch all Routes page {JSON.stringify(params)} </h1> );
}
 
export default Blog;