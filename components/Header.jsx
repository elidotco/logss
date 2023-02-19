import React, { Fragment, useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
const Header = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollTop);
  console.log(isOpen);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const menu = [
    {
      name: "Home",
      path: "/#home",
    },
    {
      name: "Features",
      path: "/#features",
    },
    {
      name: "How it works",
      path: "/#how-it-works",
    },
    {
      name: "Contact Us",
      path: "/#contact",
    },
  ];
  return (
    <div className="  items-center fixed w-full z-50 ">
      <div
        className={` h-full  flex justify-between items-center flex-row py-5 relative shadow-lg shadow-black md:shadow-none px-10 ${
          scrollTop > 40 ? "bg-black" : ""
        }`}
      >
        <div className="px-5 flex items-center text-white uppercase font-bold text-2xl">
          Go<span className="text-green-400">fo</span>od
        </div>
        <nav className=" flex items-center">
          <ul className="md:flex flex-row items-center gap-x-7 hidden px-7 bg-transparent ">
            {menu.map((item, index) => (
              <li key={index} className="text-xl text-white ">
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <span
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="md:hidden z-50"
        >
          {isOpen ? (
            <XMarkIcon className="w-8 h-8 text-white mx-5" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-white mx-5" />
          )}
        </span>

        <div
          className={
            isOpen
              ? "align-center w-full  rounded-md   top-20 align-middle fixed z-50  bg-white"
              : "hidden"
          }
        >
          <div className="fixed inset-0 flex items-center justify-center">
            <button
              type="button"
              onClick={openModal}
              className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Open dialog
            </button>
          </div>

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-20" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex h-screen items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform  rounded-2xl bg-white px-6 h-full text-left align-middle shadow-xl transition-all">
                      <ul className="">
                        {menu.map((item, index) => (
                          <li className="py-6" key={index} onClick={closeModal}>
                            <a href={item.path}>{item.name}</a>
                          </li>
                        ))}
                      </ul>
                      <div className="icons flex flex-col gap-5 my-5 ">
                        <a
                          href="#"
                          className="flex flex-row items-center border rounded-md border-green-500 px-1 py-1 mb-10 text-green-600 text-2xl gap-1"
                        >
                          <FaGooglePlay />
                          <span className="text-xl font-semibold">
                            Google Play
                          </span>
                        </a>
                        <a
                          href="#"
                          className="flex flex-row items-center font-bold border rounded-md border-green-500 px-1 py-1 text-green-600 text-2xl gap-1"
                        >
                          <FaAppStore />
                          <span className="text-xl font-semibold">
                            AppStore
                          </span>
                        </a>
                      </div>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex absolute top-2 right-2 justify-center rounded-full border border-transparent bg-blue-100 px-2 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          <XMarkIcon className="w-8 h-8 text-black mx-5" />
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          <div className="flex items-center flex-col justify-center py-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
