import Link from 'next/link';
import styles from '../styles/Home.module.css';


export default function Home() {
    return (
        <div className={styles.container}>
            <h1>Home Page</h1>
            <Link href="/users">
                Go to UserList page?
            </Link>
            <Link href="/episode">
                Go to Episode page?
            </Link>
        </div>
    );
};

