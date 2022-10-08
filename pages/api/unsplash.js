

export const config = {
    runtime: 'experimental-edge'
};

export default async function handler(req) {
    const accessToken = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
    const response = await fetch(
        `https://api.unsplash.com/users/tarun_gudipalli/statistics?client_id=${accessToken}`,
        {
            method: 'GET'
        }
    );

    const unsplashdata = await response.json();

    return new Response(
        JSON.stringify({
            downloads: unsplashdata.downloads.total,
            views: unsplashdata.views.total
        }),
        {
            status: 200,
            headers: {
                'content-type': 'application/json',
                'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600'
            }
        }
    );
}