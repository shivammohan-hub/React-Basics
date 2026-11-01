export default function Home() {
    return (
        <>
        <main className="py-10 px-52 w-full flex flex-col  h-[550px] items-center bg-white justify-center gap-6 text-2xl">
            <img className="h-28 w-auto" src="image.png" alt="" />
            <h1 className="text-[52px] font-[500]">React</h1>
            <p className="text-3xl text-[#404756] font-medium">The library for web and native user interfaces</p>
            <div className="flex gap-3 text-lg items-center">
                <a className="bg-[#087ea4] rounded-full text-white px-5 py-2.5 font-semibold" href="">Learn React</a>
                <a className="py-2.5 px-5 border-2 border-[#99a1b33] rounded-full" href="">API References</a>
            </div>

        </main>
        <div className="h-96 flex flex-col gap-10 bg-[#99a1b333] items-center justify-center px-[400px] text-center">
            <h2 className="font-[550] text-5xl px-20">Create user interfaces from components</h2>
            <p className="text-[#404756] text-xl">
                React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.
            </p>
        </div>
        </>
    )
}