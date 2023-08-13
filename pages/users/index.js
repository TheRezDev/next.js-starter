import User from "../../components/User";
import axios from "axios";

const UserList = ({ userList }) => {
    return (
        <div>
            <h1>User list page</h1>
            {
                userList.results.map(user => {
                    return(
                        <User key={user.id} user={user}/>
                    );
                })}
        </div>
    );
};

export default UserList;

export async function getStaticProps() {
    const { data } = await axios.get('https://rickandmortyapi.com/api/character');
    return {
        props: {
            userList: data,
        },
    };
};

