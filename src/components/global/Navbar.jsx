/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/logo.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navList = [
  { name: "Social Emotional Development", link: "/social" },
  { name: "Signature & Character Strengths", link: "/signature" },
  { name: "How to Tell Your Child", link: "/how" },
  { name: "Prenatal Screening", link: "/screening" },
  { name: "Educational Needs", link: "/needs" },
  { name: "Milestones", link: "/milestone" },
];

const Navbar = () => {
  const path = window.location.pathname;
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 min-[837px]:px-6 lg:px-8">
            <div className="flex min-[837px]:block justify-between min-[1134px]:h-16">
              <div className="flex justify-between items-center">
                <a href="/">
                  <div className=" flex-shrink-0 flex items-center">
                    <img
                      className="block  h-14 w-auto"
                      src={logo}
                      alt="Workflow"
                    />
                    <span className="font__secondary text-[#6931AA] text-base font-bold">
                      About Chromodiversity
                    </span>
                  </div>
                </a>
                <div className="hidden min-[837px]:ml-6 min-[837px]:grid min-[837px]:grid-cols-3 min-[837px]:justify-end min-[837px]:gap-x-8 min-[837px]:gap-y-1">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {navList.map((item, index) => (
                    <a
                      href={item.link}
                      className={`font__secondary text-[#6931AA] text-base font-semibold
                       text-right ${
                         index === 0 || index === 1 || index === 2
                           ? "border-b-2 border-[#6931AA]"
                           : ""
                       }`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className=" flex items-center min-[837px]:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="min-[837px]:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              {navList.map((item, index) => (
                <Disclosure.Button
                  as="a"
                  href={item.link}
                  className={`"bg-indigo-50 ${
                    path === item.link && "border-indigo-500"
                  } ${
                    path === item.link ? "text-[#6931AA]" : "text-black"
                  }  block pl-3 pr-4 py-2 border-l-4 text-base font-semibold font__secondary"`}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
