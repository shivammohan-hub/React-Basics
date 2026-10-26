export default function Navbar() {
    return (
        <>
        <nav className="h-12 w-full flex items-center bg-black text-white px-20 justify-between font-semibold text-xl">
            <a href="">Logo</a>
            <div className="flex gap-16">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Help</a>
                <a href="">Community</a>
            </div>
        </nav>
        </>
    )
}