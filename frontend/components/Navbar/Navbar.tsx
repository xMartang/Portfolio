import NavbarItems from "./Items/NavbarItems"
import NavbarHeader from "./Header/NavbarHeader"

const Navbar = () => {
    return (
        <nav className="flex flex-no-wrap fixed top-0 justify-center items-center w-full p-4 bg-gradient-to-b from-transparent to-white to-90% dark:from-transparent dark:to-black border-b-2 border-black dark:border-white">
            <div className="flex justify-center items-center w-full lg:w-[1024px]">
                <NavbarHeader/>

                <NavbarItems/>
            </div>
        </nav>
    );
}

export default Navbar;