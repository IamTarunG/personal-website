
import HeadContent from "../components/HeadContent"
import Spotify from "../components/Spotify"
import Unsplash from "../components/Unsplash"


function Dashboard() {

    return (
        <main>
            <HeadContent title={"Dashboard - Tarun Gudipalli"} description="This dashboard consists of my Unsplash metrics i.e views and downloads and also consists of my top Spotify Tracks" />
            <section className="mt-20 text-center">
                <p className="text-white dark:text-gray-100 font-bold text-3xl md:text-3xl tracking-tight mb-5">Dashboard</p>
                <p className="mb-5 text-gray-400 dark:text-gray-400 lg:mx-96 sm:mx-10">
                    This dashboard consists the metrics of my Unsplash 3D renders.
                </p>
            </section>
            <section className="lg:mx-96 sm:mx-20">
                <Unsplash />
            </section>
            <section className="mt-16">
                <p className=" text-white dark:text-gray-100 mb-5 text-center font-bold text-2xl md:text-2xl tracking-tight">Top Tracks</p>
                <p className=" text-gray-400 dark:text-gray-400 text-center">Want to know what I am currently listening to? Hers's my top tracks on Spotify.</p>
                <section className=" lg:mx-96 sm:mx-20">


                    <Spotify />

                </section>
            </section>
        </main>
    )
}

export default Dashboard