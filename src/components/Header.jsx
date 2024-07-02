import { NavLink } from "react-router-dom";
import profileName from "../../public/Vector.svg";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#111827] shadow-lg sticky top-0 z-50 ">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a
            href="https://www.linkedin.com/in/devozielsousa/"
            target="_blank"
            className="-m-1.5 p-1.5 flex items-center gap-5"
          >
            <img className="w-[60%]" src={profileName} alt="" />
            
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-[#DDE6ED]/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            ></PopoverPanel>
          </Popover>

          <NavLink
            to="/"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#DDE6ED] hover:bg-gray-50"
          >
            Início
          </NavLink>
          <NavLink
            to="/projects"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#DDE6ED] hover:bg-gray-50"
          >
            Projetos
          </NavLink>
          <NavLink
            to="/contact"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#DDE6ED] hover:bg-gray-50"
          >
            Contato
          </NavLink>
        </PopoverGroup>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#DDE6ED]/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Oziel Sousa</span>
              <img className="h-[15%] w-auto" src={profileName} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#DDE6ED] hover:bg-gray-50"
                >
                  Início
                </NavLink>
                <NavLink
                  to="/projects"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#DDE6ED] hover:bg-gray-50"
                >
                  Projetos
                </NavLink>
                <NavLink
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#DDE6ED] hover:bg-gray-50"
                >
                  Contato
                </NavLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
