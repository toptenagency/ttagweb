"use client";

import ServicesCta from "@/components/sections/services-cta";
import { useState } from "react";
import {
  ServerStackIcon,
  FingerPrintIcon,
  CpuChipIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import SocialFooter from "@/components/sections/social-footer";

const features = [
  {
    name: "Especialización",
    description:
      "Un equipo de expertos especializados, garantizando la entrega de imágenes creativas, únicas y de alta calidad.",
    icon: BeakerIcon,
  },
  {
    name: "Equipo de última generación",
    description:
      "Brindamos potencia, movilidad y versatilidad. Las principales ventajas de un estudio móvil inalámbbrico.",
    icon: CpuChipIcon,
  },
  {
    name: "Respaldo de tus archivos en la nube",
    description:
      "Todos tus archivos se encontrarán respaldados en nuestro servidor privado 100% seguro.",
    icon: ServerStackIcon,
  },
  {
    name: "Acceso a tus archivos 24/7",
    description:
      "Accede a tu biblioteca de archivos de manera ágil, desde nuestro nuevo portal para clientes.",
    icon: FingerPrintIcon,
  },
];

const values = [
  {
    name: "Gastronomía",
    description:
      "Reproduce esencia visual de los platillos, destacando su color, textura y presentación. Nos especializamos en estilismo gastronómico durante la sesión, asegurando que cada imagen despierte el apetito y resalte la creatividad culinaria.",
  },
  {
    name: "Producto",
    description:
      "Muestra cada detalle y característica de un objeto. Nos aseguramos de que cada imagen resalte la calidad, funcionalidad y estética del producto. Realizamos un retoque puntual en postproducción para garantizar que cada producto luzca impecable y atractivo para los clientes.",
  },
  {
    name: "Arquitectura",
    description:
      "Plasma la esencia de los espacios construidos, destacando su diseño, estructura y funcionalidad. Utilizamos lentes especiales para resaltar las líneas, ángulos, formas y texturas de los espacios, transmitiendo la atmósfera de su entorno.",
  },
  {
    name: "Paisaje",
    description:
      "Captura de la belleza natural del entorno, destacando la majestuosidad de la naturaleza. Nos enfocamos en crear imágenes que transmitan la diversidad de los paisajes. Utilizamos filtros especiales para resaltar la esencia del lugar de manera única. ",
  },
  {
    name: "Retrato",
    description:
      "Retrato de la personalidad y esencia de la persona. Nos especializamos en crear imágenes que resalten la individualidad y el carácter de cada sujeto, ya sean personales o grupales. Trabajamos con iluminación y poses en el estudio móvil para lograr retratos auténticos y expresivos.",
  },
  {
    name: "Estilo de vida",
    description:
      "Captura de momentos cotidianos de manera auténtica y natural que ayudan a humanizar tu marca, contando historias a través de imágenes que reflejen la vida diaria y las interacciones humanas. Estas usualmente se producen con ayuda de actores.",
  },
];

const testimonials = [
  {
    imageSrc:
      "https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/servicio-fotografia/fotografia-arquitectura-boa-juegos.jpg",
    name: "Brenna Goyette",
    username: "@brennagoyette",
  },
  {
    imageSrc:
      "https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/servicio-fotografia/fotografia-arquitectura-boa-juegos.jpg",
    name: "Brenna Goyette",
    username: "@brennagoyette",
  },
  {
    imageSrc:
      "https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/servicio-fotografia/fotografia-arquitectura-boa-juegos.jpg",
    name: "Brenna Goyette",
    username: "@brennagoyette",
  },
  {
    imageSrc:
      "https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/servicio-fotografia/fotografia-arquitectura-boa-juegos.jpg",
    name: "Brenna Goyette",
    username: "@brennagoyette",
  },
  {
    imageSrc:
      "https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/servicio-fotografia/fotografia-arquitectura-boa-juegos.jpg",
    name: "Brenna Goyette",
    username: "@brennagoyette",
  },
  {
    imageSrc:
      "https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/servicio-fotografia/fotografia-arquitectura-boa-juegos.jpg",
    name: "Brenna Goyette",
    username: "@brennagoyette",
  },
];

const faqs = [
  {
    question: "¿Qué es un estudio móvil y cuáles son sus beneficios?",
    answer:
      "Un estudio creativo móvil implica montar y operar todo nuestro equipo fotográfico inalámbrico directamente en tu establecimiento, ofreciendo así toda su potencia, movilidad y versatilidad, tal como lo hacen los estudios creativos especializados. La principal ventaja de un estudio móvil radica en la luz artificial, ya que nos permite controlar su dirección, intensidad y temperatura, lo que la hace más moldeable y predecible. Esta flexibilidad nos libera de depender del sol y su posición, lo que nos permite llevar a cabo sesiones fotográficas en diversas circunstancias. Además, agiliza el proceso de trabajo en locación sin comprometer la calidad artística y comercial de las fotografías. La luz es la materia prima de la fotografía, y es crucial contar con elementos remotos, inalámbricos y de la más alta calidad posible para proyectar de manera óptima tu marca, la esencia de tu establecimiento y la presentación de tus platillos a través de imágenes comerciales.",
  },
  {
    question: "¿Cuántas fotografías incluye cada sesión de estudio?",
    answer:
      "La cantidad de fotografías entregadas depende del estilo fotográfico que elija el cliente, ya que cada estilo tiene sus propias características y limitaciones.  Gastronomía y Producto: Se capturan 5 ítems gastronómicos, cada uno en 3 ángulos, resultando en 15 imágenes finales. Arquitectura y Paisaje: Cada ángulo arquitectónico se captura una sola vez de manera multiple, resultando en 5 imagenes finales. Retrato y Estilo de vida: Cada escena se captura en 2 ángulos, resultando en 10 imágenes finales. Nota - En el caso de contratar un paquete de colaboración mensual, los estilos pueden ser mixtos para una creación de contenido más versátil y organizada.",
  },
  {
    question: "¿Qué considerar para una sesión de estudio en mi locación?",
    answer:
      "Para una sesión de estudio en tu locación, asegúrate de tener un área designada de al menos 3.5 metros cuadrados, libre de tránsito de personal durante la sesión. Dependiendo del estilo fotográfico que elegiste, prepara el entorno adecuadamente: en gastronomía/producto, los alimentos y bebidas deben ser frescos y preparados durante la sesión; en arquitectura/paisaje, el área debe estar acomodada y escombrada; y en retrato/estilo de vida, las personas deben estar presentables y contar con maquillista y cambios de vestuario si es necesario. Completa el shooting list en tu cuenta del portal de TOPTEN Agency antes de la sesión, detallando los ítems, ángulos o escenas a fotografiar. Asegúrate de tener todos los elementos y accesorios necesarios, y que el personal del establecimiento esté informado y disponible para brindar apoyo al equipo de producción.",
  },
  {
    question: "¿Qué conceptos no están incluidos en la sesion fotográfica?",
    answer:
      "Las sesiones no incluyen elementos decorativos, utilería, fondos, cicloramas  cambio de locación, horas extras, o la contratación de actores / modelos. Esto significa que el cliente debe proporcionar cualquier elemento adicional de producción necesario y en caso de esta extenderse más allá de las 4 horas estipuladas, será necesario revisar la disponibilidad o coordinar una nueva fecha, de sesión lo cual resulta en un costo extra por llamado (traslado de personal y equipo de producción).",
  },
  {
    question: "¿Cómo se seleccionan las fotografías finales?",
    answer:
      "Todas las fotografías capturadas serán presentadas al cliente o gerente de marca durante la sesión para su selección y autorización. Las fotografías descartadas serán eliminadas permanentemente, garantizando la privacidad y confidencialidad de la información visual y el almacenamiento de nuestro servidor.",
  },
  {
    question: "Cómo se entregan las fotografías finales?",
    answer:
      "Las imágenes se proporcionarán en formato .jpg con una resolución superior a 8000 píxeles, asegurando alta definición y detalle en cada fotografía. Los archivos fotográficos estarán disponibles para su entrega en un plazo mínimo de 3 días hábiles después de la sesión fotográfica. Nota - La agencia no proporciona imágenes sin revelar ni en formatos .raw bajo ninguna circunstancia. Todas las fotografías entregadas estarán completamente editadas y listas para su uso.",
  },
  {
    question: "¿Cuál es el alcance de la post-producción?",
    answer:
      "La post-producción incluida en cada sesión es: el revelado digital, la corrección de color, el estilo de colorimetría e intenciones creativas de edición y el retoque general de inperfecciones. Todo retoque avanzado, clonación o montaje requerido en las fotografías, genera un costo extra según el requerimiento.",
  },
  {
    question: "¿Qué es el Portal de colaboracion empresarial?",
    answer:
      "La post-producción incluida en cada sesión es: el revelado digital, la corrección de color, el estilo de colorimetría e intenciones creativas de edición y el retoque general de inperfecciones. Todo retoque avanzado, clonación o montaje requerido en las fotografías, genera un costo extra según el requerimiento.",
  },
];

export default function Fotografia() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900">
      <main className="isolate">
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-600 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
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
            <svg x="50%" y={-1} className="overflow-visible fill-fotografia/30">
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
                  <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                    <span className="text-fotografia">
                      Fotografías hechas con un estudio creativo,
                    </span>{" "}
                    directamente en tu locación.
                  </h1>

                  <p className="relative mt-6 text-lg leading-8 text-gray-200 sm:max-w-md lg:max-w-none">
                    Capturamos la esencia de tu marca con fotografías
                    profesionales, equipando un estudio creativo móvil e
                    inalámbrico que garantiza un ambiente remoto, ideal para
                    crear imágenes de alta calidad directamente en tu
                    establecimiento.
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
        <div className="bg-transparetn py-10 sm:py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-fotografia">
                ¿Cuáles son las cualidades de un estudio creativo móvil?
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                Cualidades del servicio de fotografía
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-100">
                El servicio de fotografía con estudio creativo, ayuda generar un
                contenido sobresaliente para que tu marca destaque en
                plataformas digitales.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-white">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-fotografia">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-100">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
              Estos son los diferentes estilos de fotografía que realizamos.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              ¿No sabes que tipo de fotografía necesita tu marca? Conoce los
              estilos fotográficos que realizamos con mayor frecuencia.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value, index) => (
              <div key={index}>
                <dt className="font-semibold text-fotografia">{value.name}</dt>
                <dd className="mt-1 text-gray-100">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Logo cloud */}
        <div className="relative isolate -z-10 mt-32 sm:mt-48">
          <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg
              className="h-[40rem] w-[80rem] flex-none stroke-gray-900"
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
              <svg x="50%" y="50%" className="overflow-visible fill-ttag/10">
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
            <h2 className="text-center text-lg font-semibold leading-8 text-gray-100">
              Hemos tenido la oportunidad de colaborar con marcas lideres en el
              mercado.
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-5 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-6">
              <img
                className="w-[158px] h-[38px] object-contain"
                src="https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/logotipos-clientes/logotipos-blancos-clientes/logotipo-xcaret-blanco.png"
                alt="Xcaret"
              />
              <img
                className="w-[158px] h-[55px] object-contain"
                src="https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/logotipos-clientes/logotipos-blancos-clientes/logotipo-gpo-andersons-blanco.png"
                alt="Gpo Andersons"
              />
              <img
                className="w-[158px] h-[48px] object-contain"
                src="https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/logotipos-clientes/logotipos-blancos-clientes/logotipo-ford-blanco.png"
                alt="Ford"
              />
              <img
                className="w-[178px] h-[65px] object-contain"
                src="https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/logotipos-clientes/logotipos-blancos-clientes/logotipo-sr-frogs-blanco.png"
                alt="Sr Frogs"
              />
              <img
                className="w-[158px] h-[83px] object-contain"
                src="https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/logotipos-clientes/logotipos-blancos-clientes/logotipo-starbucks-blanco.png"
                alt="Starbucks"
              />
              <img
                className="w-[158px] h-[55px] object-contain"
                src="https://amplify-d2jtebj3g0cdpz-ma-amplifydataamplifycodege-o2as8a7qlq7j.s3.amazonaws.com/logotipos-clientes/logotipos-blancos-clientes/logotipo-sushiitto-blanco.png"
                alt="SushiItto"
              />
            </div>
          </div>
        </div>

        {/* Testimonials section */}
        <div className="relative isolate mt-32 sm:mt-28 sm:pt-32 mb-10">
          <svg
            className="absolute inset-0 -z-10 hidden h-full w-full stroke-white/10 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] sm:block"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
                width={200}
                height={200}
                x="50%"
                y={0}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={0} className="overflow-visible fill-fotografia/10">
              <path
                d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)"
            />
          </svg>
          <div className="relative">
            <div
              className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
              aria-hidden="true"
            >
              <div
                className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-fotografia to-indigo-600"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div
              className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end"
              aria-hidden="true"
            >
              <div
                className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-fotografia to-audiovisual xl:ml-0 xl:mr-[calc(50%-12rem)]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-xl sm:text-center">
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-fotografia">
                  ¿Cómo luce nuestro trabajo fotográfico?
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                  Explora alguno de nuestros proyectos recientes
                </p>
              </div>
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-sm leading-6 text-gray-900 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <figure
                    className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5"
                    key={index}
                  >
                    <img
                      src={testimonial.imageSrc}
                      alt="Testimonial"
                      className="w-full rounded-t-2xl"
                    />
                    <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                      <div className="flex items-center justify-center h-10 w-10 bg-gray-50 rounded-full">
                        <svg
                          className="h-6 w-6 text-fotografia"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-gray-600">
                          {testimonial.username}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-4xl divide-y divide-gray-100/30">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-fotografia">
                Preguntas frecuentes con respecto a nuestro servicio de
                fotografía
              </h2>
              <dl className="mt-10 space-y-6 divide-y divide-gray-100/10">
                {faqs.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <DisclosureButton className="flex w-full items-start justify-between text-left text-gray-100">
                            <span className="text-base font-semibold leading-7">
                              {faq.question}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <MinusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </DisclosureButton>
                        </dt>
                        <DisclosurePanel as="dd" className="mt-2 pr-12">
                          <p className="text-base leading-7 text-gray-100">
                            {faq.answer}
                          </p>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </main>
      <ServicesCta />
      <SocialFooter />
    </div>
  );
}
