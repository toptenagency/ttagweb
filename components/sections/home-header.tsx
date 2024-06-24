"use client";
import { useState, useEffect, useRef } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, CameraIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { BrushIcon, CodeIcon, RssIcon, VideoIcon } from "lucide-react";

const products = [
  {
    name: "Fotografía",
    description:
      "Estudio creativo móvil e inalámbrico para sesiones de alta demanda.",
    href: "./fotografia",
    icon: CameraIcon,
    hoverColor: "group-hover:text-fotografia",
  },
  {
    name: "Audiovisual",
    description:
      "Casa productora especializada en anuncios publicitarios y comerciales.",
    href: "#",
    icon: VideoIcon,
    hoverColor: "group-hover:text-audiovisual",
  },
  {
    name: "Diseño Gráfico",
    description:
      "Estilización, unificación y mejora de la comunicación visual de tu marca.",
    href: "#",
    icon: BrushIcon,
    hoverColor: "group-hover:text-disenoGrafico",
  },
  {
    name: "Desarrollo Web",
    description:
      "Plataformas web autoadminisrtrables, escalables y maquetadas desde cero.",
    href: "#",
    icon: CodeIcon,
    hoverColor: "group-hover:text-desarrolloWeb",
  },
  {
    name: "Estrategia Digital",
    description:
      "Posicionamiento de tu marca en linea a través de estrategias de contenido y segmentación.",
    href: "#",
    icon: RssIcon,
    hoverColor: "group-hover:text-estrategiaDigital",
  },
];
const callsToAction = [
  { name: "Mirar Video", href: "#", icon: PlayCircleIcon },
  { name: "Contacto", href: "#", icon: PhoneIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function HomeHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setPopoverOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popoverRef]);

  return (
    <header className="bg-ttag">
      <div>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#@/" className="-m-1.5 p-1.5">
              <span className="sr-only">TOPTEN Agency</span>
              <img
                className="h-14 w-auto"
                src="https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/logotipos/logotipo_toptenagency_blanco.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menú principal</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative" ref={popoverRef}>
              <Popover.Button
                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-100 outline-none focus:outline-none"
                onClick={() => setPopoverOpen(!popoverOpen)}
              >
                Servicios
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                show={popoverOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className={classNames(
                              "h-6 w-6 text-gray-500",
                              item.hoverColor
                            )}
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className={classNames(
                              "block font-semibold text-gray-900",
                              item.hoverColor
                            )}
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-100"
            >
              Portafolio
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-100"
            >
              Compañia
            </a>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-100"
            >
              Comenzar <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">TOPTEN Agency</span>
                <img
                  className="h-8 w-auto"
                  src="https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/logotipos/isotipo_toptenagency_negro.svg"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Cerrar menú</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-black hover:bg-gray-100">
                          Servicios
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...products, ...callsToAction].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-600 hover:bg-gray-500"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-100"
                  >
                    Portafolio
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                  >
                    Compañia
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#./mi-portal"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Iniciar Sesión
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </header>
  );
}

export { HomeHeader };
