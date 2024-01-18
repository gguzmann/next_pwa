import PreVideo from "./components/PreVideo";

export default function Home() {
  return (
    <div className="h-[80%] overflow-y-scroll bg-gray-100">

      <main className="flex-1 py-8 ">
        <div className=" container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">



          {
            new Array(19).fill(0).map((x, i) => <PreVideo key={i} number={i} />)
          }


        </div>
      </main>
    </div>
  )
}