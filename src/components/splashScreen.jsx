const SplashScreen = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center relative bg-inherit">
            <img src="gaurav-logo.png" alt="logo" className="w-48" />
            <div class="loader w-1/3 md:w-1/5">
                <div class="loaderBar"></div>
            </div>
        </div>
    );
}

export default SplashScreen;