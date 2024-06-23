"use client";

import ServicesCta from "@/components/sections/services-cta";
import { useState } from "react";

const stats = [
  { label: "Alimentos y bebidas / Productos", value: "Gastronomía" },
  { label: "Interiorismo arquitectonico / Paisajismo", value: "Arquitectura" },
  { label: "Retrato / Estilo de vida", value: "Retrato" },
];
const values = [
  {
    name: "Gastronomia",
    description:
      "Reproduce esencia visual de los platos, destacando su color, textura y presentación. Nos especializamos en estilismo gastronómico durante la sesión, asegurando que cada imagen despierte el apetito y resalte la creatividad culinaria.",
  },
  {
    name: "Producto",
    description:
      "Muestra cada detalle y característica de un objeto. Nos aseguramos de que cada imagen resalte la calidad, funcionalidad y estética del producto. Realizamos un retoque puntual en postproducción para garantizar que cada producto luzca impecable y atractivo para los clientes.",
  },
  {
    name: "Arquitectura",
    description:
      "Plasma la esencia de los espacios construidos, destacando su diseño, estructura y funcionalidad. Utilizamos lentes especiales para resaltar las líneas, ángulos, formas y texturas de los espacios, tranmitiendo la atmósfera de su entorno.",
  },
  {
    name: "Paisaje",
    description:
      "Captura de la belleza natural del entorno, destacando la majestuosidad de la naturaleza. Nos enfocamos en crear imágenes que transmitan la diversidad de los paisajes. Utilizamos filtros especiales para resaltar la esencia del lugar de manera única. ",
  },
  {
    name: "Retrato",
    description:
      "Retrato la personalidad y esencia de la persona. Nos especializamos en crear imágenes que resalten la individualidad y el carácter de cada sujeto, ya sean personales o grupales. Trabajamos con iluminación y poses en el estudio móvil para lograr retratos auténticos y expresivos.",
  },
  {
    name: "Estilo de vida",
    description:
      "Captura de momentos cotidianos de manera auténtica y natural que ayudan a humanizar tu marca, contando historias a través de imágenes que reflejen la vida diaria y las interacciones humanas. Estas usualmente se producen con ayuda de actores.",
  },
];

export default function Fotografia() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}

      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-fotografia to-audiovisual opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-ttag sm:text-6xl">
                    <span className="text-fotografia">
                      Un estudio fotográfico creativo,
                    </span>{" "}
                    directamente en tu locación.
                  </h1>

                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Capturamos la esencia de tu marca con sesiones fotográficas
                    profesionales con un estudio creativo móvil e inalámbrico
                    que garantiza un ambiente remoto para crear imágenes de alta
                    calidad directamente en tu establecimiento.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/servicio-fotografia/fotografia-producto-toptenagency.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/servicio-fotografia/fotografia-gastronomica-platillo-toptenagency.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/servicio-fotografia/fotografia-arquitectura-karma-tulum-toptenagency.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/servicio-fotografia/fotografia-gastronomica-bebida-starbucks-toptenagency.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/servicio-fotografia/fotografia-retrato-estilo-de-vida-toptenagency.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-ttag sm:text-4xl">
              Estilos fotográficos de especialidad
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-ttag">
                  Ofrecemos sesiones fotográficas especializadas, garantizando
                  la entrega de imágenes de alta calidad, directamente en tu
                  locación.
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                  <p>
                    Ofrecemos un estudio creativo móvil directamente en tu
                    establecimiento, brindando potencia, movilidad y
                    versatilidad. La principal ventaja de un estudio móvil es
                    que la luz artificial nos permite controlar su dirección,
                    intensidad y temperatura, eliminando la dependencia del sol
                    y garantizando alta calidad en cualquier circunstancia, sin
                    comprometer la calidad artística de las fotografías.
                  </p>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse gap-y-4"
                    >
                      <dt className="text-base leading-7 text-gray-600">
                        {stat.label}
                      </dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            src="https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/servicio-fotografia/fotografia-platillo-bebida-arquitectura-toptenagency.jpg"
            alt=""
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Caracteristicas principales de los estilos fotográficos más
              solicitados
            </h2>
            <p className="mt-6 text-lg leading-8 text-ttag">
              Conoce los estilos fotográficos que realizamos con mayor
              frecuencia.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value, index) => (
              <div key={index}>
                <dt className="font-semibold text-fotografia">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Logo cloud */}
        <div className="relative isolate -z-10 mt-32 sm:mt-48">
          <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg
              className="h-[40rem] w-[80rem] flex-none stroke-gray-200"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                  width={200}
                  height={200}
                  x="50%"
                  y="50%"
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(-100 0)"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
                <path
                  d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
              />
            </svg>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
              Colaboramos con las marcas más inovadoras del mercado
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-5 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-6">
              <img
                className="w-[158px] h-[38px] object-contain"
                src="https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/logotipos-clientes/logotipo-xcaret.png"
                alt="Xcaret"
              />
              <img
                className="w-[158px] h-[55px] object-contain"
                src="https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/logotipos-clientes/logotipo-gpo-andersons.png"
                alt="Gpo Andersons"
              />
              <img
                className="w-[158px] h-[48px] object-contain"
                src="https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/logotipos-clientes/logotipo-ford.png"
                alt="Ford"
              />
              <img
                className="w-[178px] h-[60px] object-contain"
                src="https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/logotipos-clientes/logotipo-sr-frogs.png"
                alt="Sr Frogs"
              />
              <img
                className="w-[158px] h-[83px] object-contain"
                src="https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/logotipos-clientes/logotipo-starbucks.png"
                alt="Starbucks"
              />
              <img
                className="w-[158px] h-[55px] object-contain"
                src="https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/logotipos-clientes/logotipo-sushiitto.png"
                alt="SushiItto"
              />
            </div>
          </div>
        </div>
      </main>
      <ServicesCta />
    </div>
  );
}
