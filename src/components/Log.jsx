// 4. Conditional Login UI

// Create a login interface using `useState`. Display “Welcome Back!” when the user is logged in and “Please Login” when logged out. Add a button to toggle between the two states.


const Log = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="px-24 py-16 flex flex-col gap-6 text-center bg-[#087ea4] rounded">
                <h1 className="text-2xl font-semibold text-white">Please Login</h1>
                <a className="text-white font-semibold border-2 rounded-full px-5 py-2 hover:bg-white hover:text-[#087ea4]" href="">Login</a>
            </div>
        </div>
    )
}

export default Log