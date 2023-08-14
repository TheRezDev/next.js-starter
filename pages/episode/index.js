import axios from "axios";
import Link from "next/link";

const EpisodeList = ({ episodeList }) => {
    return (
        <div>
            <h1>Episode list page</h1>
            {
                episodeList.results.map((episode) => {
                    return (
                        <div key={episode.id}>
                            <Link href={`/episode/${episode.id}`} passHref>
                                <h2>
                                    episode: {episode.episode} - name: {episode.name}
                                </h2>
                            </Link>
                            <hr />
                        </div>
                    );
                })}
        </div>
    );
};

export default EpisodeList;

export async function getStaticProps() {
    const { data } = await axios.get('https://rickandmortyapi.com/api/episode');
    return {
        props: {
            episodeList: data,
        },
    };
};

