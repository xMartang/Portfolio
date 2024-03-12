import { useState} from "react"

import { navbarItemsConfig } from "@/config/NavbarConfig";

interface NavbarItemsProps {
    navbarId?: string
}

const defaultItemClassName = "block py-2 px-3 md:p-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
const clickedItemClassName = "block py-2 px-3 md:p-1 underline text-gray-900 rounded md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white dark:border-gray-700 font-bold"

const NavbarItems: React.FC<NavbarItemsProps> = ({
    navbarId
}) => {
    const [clickedItemName, setClickedItem] = useState("");

    let navbarItems = navbarItemsConfig.map(function(navbarItem) {
        let currItemName = navbarItem.name

        return (
            <li key={currItemName}>
                <a onClick={() => setClickedItem(currItemName)} href={navbarItem.href} id={currItemName} className={clickedItemName == currItemName ? clickedItemClassName : defaultItemClassName}>
                    {currItemName}
                </a>
            </li>
        );
    })

    return (
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id={navbarId}>
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                {navbarItems}
            </ul>
        </div>
    );
}

export default NavbarItems;