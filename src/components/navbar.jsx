const Navbar = () => {
    return (
        <div className="w-full flex px-20 py-5 justify-between items-center">
            <p className="caveat text-5xl font-medium name-shadow">Gaurav</p>
            <div className="flex items-center justify-center gap-8 text-lg font-semibold">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
            </div>
        </div>
    );
}

export default Navbar;