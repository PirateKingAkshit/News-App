import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const navigation = [
  { name: "Technology", href: "#", current: false },
  { name: "Finance", href: "#", current: false },
  { name: "Sports", href: "#", current: false },
  { name: "Politics", href: "#", current: false },
  { name: "Weather", href: "#", current: false },
  { name: "Health", href: "#", current: false },
  { name: "Space", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ onSearch }) {
  
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme || "light");
  const tooltipText =
    theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode";
  const [searchValue, setSearchValue] = useState("");
  const [activeItem, setActiveItem] = useState("");
  const navigate=useNavigate()

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
     localStorage.setItem("theme", theme);
  }, [theme]);

  const handleNavigationItemClick = (itemName) => {
    setActiveItem(itemName)
    onSearch(itemName)
  }

  const handleSearch = () => {
    if (searchValue.trim().length) {
      onSearch(searchValue.trim());
      setSearchValue("");
    }
  };

  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8 bg-blue-700  dark:bg-black  ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-500 dark:hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <span
                    className="text-2xl text-yellow-500 font-semibold cursor-pointer"
                    onClick={() => {
                      navigate("/");
                      setActiveItem("");
                    }}
                  >
                    Insight<span className=" text-white">Chronicles</span>
                  </span>
                </div>
                <div className="  hidden sm:flex sm:flex-1  sm:items-center sm:justify-center ">
                  <div className="flex me-5 space-x-8">
                    {navigation.map((item) => (
                      <div
                        key={item.name}
                        className={classNames(
                          item.name === activeItem
                            ? "bg-blue-500 text-white cursor-pointer "
                            : "text-gray-300 cursor-pointer hover:bg-blue-500 dark:hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        onClick={() => {
                          handleNavigationItemClick(item.name);
                        }}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                  <div className="flex  items-center w-64 sm:w-auto">
                    <div className="relative w-full">
                      <span
                        className="absolute inset-y-0 left-0 flex items-center pl-3"
                        onClick={() => {
                          handleSearch();
                        }}
                      >
                        <MagnifyingGlassIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                      <input
                        type="text"
                        placeholder="Ex:-Ram Mandir..."
                        className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md text-gray-900 bg-white focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-gray-200"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyUp={(e) => e.key === "Enter" && handleSearch()}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative  rounded-full p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={() => {
                    theme === "light" ? setTheme("dark") : setTheme("light");
                  }}
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">{tooltipText}</span>
                  {theme === "light" ? (
                    <MoonIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <SunIcon className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 bg-blue-600 dark:bg-black">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="div"
                  href={item.href}
                  className={classNames(
                    item.name === activeItem
                      ? "bg-blue-500 text-white cursor-pointer"
                      : "text-gray-300 cursor-pointer hover:bg-blue-500 dark:hover:bg-gray-800 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                  onClick={() => {
                    handleNavigationItemClick(item.name);
                  }}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="flex  items-center w-full sm:w-auto">
                <div className="relative w-full">
                  <span
                    className="absolute inset-y-0 left-0 flex items-center pl-3"
                    onClick={() => {
                      handleSearch();
                    }}
                  >
                    <MagnifyingGlassIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md text-gray-900 bg-white focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-gray-200"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyUp={(e) => e.key === "Enter" && handleSearch()}
                  />
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
