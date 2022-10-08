
import { getTopTracks } from '../lib/spotify'
import useSWR from 'swr'
import Spinner from './Spinner'
import { useState, useEffect } from 'react'
// const fetcher = async () => {
//     const response = await getTopTracks()
//     const data = await response.json()
//     return data
// }
function Spotify() {
    const [toptracks, setToptracks] = useState()
    const [loading, setLoading] = useState(true)
    // const { data, error } = useSWR('spotifydata', fetcher)
    useEffect(() => {
        const getTracks = async () => {
            const response = await getTopTracks()
            const data = await response.json()
            setToptracks(data)
            setLoading(false)
        }
        getTracks()
    }, [])


    // if (!data) {
    //     return (
    //         <div className='text-center mt-10'>
    //             <Spinner />
    //         </div>
    //     )
    // }
    // if (error) {
    //     return (
    //         <div>
    //             <p className='text-center text-red-600 text-md mt-10 dark:text-red-500'>Make sure to have proper internet connection</p>
    //         </div>
    //     )
    // }
    if (loading) {
        return (
            <div className='text-center mt-10'>

                <Spinner />
            </div>
        )
    }
    console.log(toptracks)
    console.log(toptracks.items.slice(0, 10))
    const items = toptracks.items.slice(0, 10)
    const tracks = items.map((track) => ({
        artist: track.artists.map((_artist) => _artist.name).join(', '),
        songUrl: track.external_urls.spotify,
        title: track.name,
        id: track.id
    }));


    return (
        <div>
            {
                tracks.map((track, index) => {
                    return (
                        <div className="flex flex-row items-baseline border-b border-gray-700  max-w-3xl w-full mt-8" key={track.id}>
                            <p className="text-sm font-bold text-gray-400 dark:text-gray-600">
                                {index + 1}
                            </p>
                            <div className="flex flex-col pl-3">
                                <a
                                    className="text-white dark:text-gray-100 font-medium truncate w-60 sm:w-96 md:w-full"
                                    href={track.songUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {track.title}
                                </a>
                                <p
                                    className="text-gray-500 mb-4 truncate w-60 sm:w-96 md:w-full"
                                    color="gray.500"
                                >
                                    {track.artist}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )


}

export default Spotify