import Image from "next/image"
import HeadContent from "../components/HeadContent"


function Home() {
  return (
    <div>
      <main className="h-screen flex justify-center items-center">
        <HeadContent title={"Tarun Gudipalli"} description="I love learning new stuff!" />
        <section className="flex justify-evenly items-center flex-col my-20 h-64">
          <Image
            alt="Tarun Gudipalli"
            height={130}
            width={130}
            src="/avatar.jpg"
            priority
            className="rounded-full justify-center"
          />
          <p className="font-bold text-2xl md:text-3xl tracking-tight mb-1 text-white dark:text-white text-center">
            Tarun Gudipalli
          </p>
          <p className="text-center text-gray-400 dark:text-gray-400">
            I love learning new stuff!
          </p>
        </section>

      </main>
    </div>
  )
}

export default Home

