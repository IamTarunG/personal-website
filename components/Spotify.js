

import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import Spinner from './Spinner'

function Spotify() {
    const { data } = useSWR('/api/top-tracks', fetcher)



    if (!data) {
        return (
            <div className='text-center mt-10'>
                <Spinner />
            </div>
        )
    }






    return (
        <div>
            {
                data.map((track, index) => {
                    return (
                        <div className="flex flex-row items-baseline border-b border-gray-700  max-w-3xl w-full mt-8" key={track.songUrl}>
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