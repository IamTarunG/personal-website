import useSWR from 'swr'
import MetricCard from './MetricCard'
import Spinner from './Spinner'

function Unsplash() {

    const fetcher = async () => {
        const response = await fetch(`https://api.unsplash.com/users/tarun_gudipalli/statistics?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`)
        const data = await response.json()
        return data
    }
    const { data, error } = useSWR('unsplashdashboard', fetcher)

    if (error) {
        return (
            <div>
                <p className='text-red-600 text-2xl dark:text-red-600'>Make sure to have internet connection</p>
            </div>
        )
    }
    if (!data) {
        return (
            <div className='text-center mt-10'>
                <Spinner />
            </div>
        )
    }
    const link = "https://unsplash.com/@tarun_gudipalli"
    return (
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full'>
            <MetricCard link={link} title="Unsplash Views" metric={data.views.total} />
            <MetricCard link={link} title="Unsplash Downloads" metric={data.downloads.total} />
        </div>
    )
}

export default Unsplash