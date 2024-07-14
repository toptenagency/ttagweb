"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  CircleStackIcon,
  Cog6ToothIcon,
  GlobeAltIcon,
  PlayIcon,
  ShieldCheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  AcademicCapIcon,
  CheckCircleIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import ServicesCta from "@/components/sections/services-cta";
import SocialFooter from "@/components/sections/social-footer";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];
const stats = [
  {
    label:
      "Una configuración sólida, segura y de excelentes prácticas como lo dictan los lineamientos de indexación de Google.",
    value: "Configuración y optimización",
  },
  {
    label:
      "Una web ligera, escalable, de un rendimiento sobresaliente y con funcionalidades clave para generar más clientes.",
    value: "Desarrollo y funcionalidades",
  },
  {
    label:
      "Sitios web profesionales, cuidando cada aspecto del diseño web, la interfáz de usuario y su navegación.",
    value: "Experiencia de usuario UX/UI",
  },
  {
    label:
      "Implementadas para una calificación positiva en Google Speed Insights y listas para iniciar su posicionamiento.",
    value: "Lista para su posicionamiento",
  },
];
const values = [
  {
    name: "Configuración de seguridad web.",
    description:
      "Garantizamos la seguridad de tu sitio web mediante la configuración de privacidad de tu dominio, la implementación de un mail empresarial seguro (SPTM), la correcta configuración de DNS y la instalación de certificados SSL.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Implementación de rendimiento.",
    description:
      "Optimizamos el rendimiento de tu sitio web mediante la implementación de WebSockets, enrutamiento eficiente, protocolos TLS y HTTPS, reanudación de conexión, normalización de URLs entrantes, protección contra hotlinking y verificación de integridad del navegador.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Alojamiento en servidor virtual VPS.",
    description:
      "Alojamiento en servidor virtual (VPS) con respaldos mensuales de seguridad del sitio, optimizador de tareas Cron, sistemas de Varnish, monitoreo de conexión y  acciones que garantizan la eficiencia, velocidad y rendimiento de tu sitio web.",
    icon: CircleStackIcon,
  },
  {
    name: "Red de entrega de contenindos CDN.",
    description:
      "Red de distribución de contenidos de múltiples servidores con una CDN empresarial, caché, ruteo inteligente y protección contra DDoS, tu sitio será más rápido y seguro brindando una experiencia superior para tus usuarios y un mejor posicionamiento en motores de búsqueda",
    icon: RocketLaunchIcon,
  },
  {
    name: "Suite de video-transferencia.",
    description:
      "Reproductor de video, con transcodificación y funciones de seguridad para hacer que tus videos sean autoalojados, rápidos y privados. Con una infraestructura de red avanzada y presencia global, para una experiencia inmediata y sin buffering en cada solicitud de reproducción audiovisual.",
    icon: PlayIcon,
  },
  {
    name: "Optimización de imágenes.",
    description:
      "Mejoramos la carga de tu sitio mediante el redimensionamiento y reformateo de imágenes a WebP, con redirección a JPEG y PNG como respaldo. Esto garantiza imágenes ligeras y rápidas sin perder calidad; crucial en la primera carga de contenido de tu sitio y su calificación final en motores de búsqueda.",
    icon: CircleStackIcon,
  },
];
const team = [
  {
    name: "Avisos Inteligentes",
    role: "Genera nuevas ventas",
    imageUrl:
      "https://ttag-portfolio.s3.amazonaws.com/funciones_web/banners.webp",
    location:
      "Popups / banners ultra ligeros que conectan a los visitantes de tu sitio con tus ofertas, los clics proporcionan métricas para optimizar campañas.",
  },
  {
    name: "Sistema de Formularios",
    role: "Escucha a tus clientes",
    imageUrl:
      "https://ttag-portfolio.s3.amazonaws.com/funciones_web/formularios.webp",
    location:
      "formularios avanzados personalizados para recopilar datos de clientes, con sistema de analisis de datos, y notificaciones cuando son completados.",
  },
  {
    name: "Video Stream Privado",
    role: "Interfáz de video ultra-rapida",
    imageUrl:
      "https://ttag-portfolio.s3.amazonaws.com/funciones_web/stream.webp",
    location:
      "Distribución de vídeo con transcodificación, almacenamiento, seguridad, para reproducir video en alta calidad sin buffering en tu sitio web.",
  },
  {
    name: "Gestor de citas para servicios",
    role: "Reserva y agenda de tus servicios",
    imageUrl:
      "https://ttag-portfolio.s3.amazonaws.com/funciones_web/bookings.webp",
    location:
      "Permite que los usuarios de tu web, se registren, elijan y reserven tus servicios con calendario, recordatorios, cancelaciones, mensajería y más.",
  },
  {
    name: "Tienda en linea",
    role: "Impulsa tu comercio electrónico",
    imageUrl:
      "https://ttag-portfolio.s3.amazonaws.com/funciones_web/store.webp",
    location:
      "Vende productos físicos, digitales o servicios, con capacidad de parcializaciones, donaciones, suscripciones, depósitos y más.",
  },
  {
    name: "Automatizaciones",
    role: "Automatiza tus flujos de trabajo",
    imageUrl:
      "https://ttag-portfolio.s3.amazonaws.com/funciones_web/automatizations.webp",
    location:
      "Agiliza tus procesos empresariales, conecta tu web a decenas de populares herramientas en linea para automatizar procesos y desencadenar acciones.",
  },
  // More people...
];
const benefits = [
  "Diseño web a la medida",
  "Desplasamiento animado ",
  "Optimización constante",
  "100% responsívo a móvil",
  "Rendimiento ultra rapido",
  "Arquitectura informacional",
];
const footerNavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900">
      <main className="relative isolate">
        {/* Background */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          />
        </div>

        {/* Header section */}
        <div className="px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Desarrollamos sitios web funcionales y redituables
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Desarrollo de sitios web realmente funcionales, con el objetivo de
              generar conversiones, correctamente indexadas para posicionar en
              gestores de busqueda y escalar tu marca en presencia y ventas.
            </p>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  El desarrollo web es uno de nuestros servicios más destacados,
                  caracterizado por una arquitectura sólida y segura, siguiendo
                  estrictamente los lineamientos de indexación de Google. Nos
                  enfocamos en la creación de sitios ligeros y escalables, con
                  un rendimiento excepcional y funcionalidades clave diseñadas
                  para atraer y generar más clientes.
                </p>
                <p className="mt-8">
                  Entendemos la importancia de la velocidad y el rendimiento en
                  el entorno digital actual. Por ello, cumplimos con los más
                  altos estándares de optimización, ofreciendo también una
                  plataforma robusta y funcional.
                </p>
              </div>
              <div>
                <p>
                  Realizada con una optimización exhaustiva, asegurando que
                  estén completamente preparados para estrategias de
                  optimización (SEO) y marketing (SEM) en motores de búsqueda.
                  Esto garantiza una calificación positiva en el analisis de
                  Google y su posicionamiento efectivo.
                </p>
                <p className="mt-8">
                  Nuestros sitios web se centran en proporcionar soluciones
                  tecnológicas avanzadas que no solo cumplen altos estandares de
                  desarrollo y configuración, sino que solucionan problematicas
                  reales de nuestros clientes, asegurando su éxito en el
                  competitivo mundo digital.
                </p>
              </div>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div
                  key={statIdx}
                  className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6"
                >
                  <dt className="text-base leading-7 text-gray-300">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2894&q=80"
            className="aspect-[9/4] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Configuraciones avanzadas de cada sitio web
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Desarrollamos sitios web con una optimización exhaustiva,
              asegurando que estén completamente preparados para estrategias de
              optimización (SEO) y marketing (SEM) en motores de búsqueda. Esto
              garantiza un posicionamiento efectivo en Google.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <value.icon
                    aria-hidden="true"
                    className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                  />
                  {value.name}
                </dt>{" "}
                <dd className="inline">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Team section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Funciones equipadas en cada sitio web
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Cada sitio web se complementa con seis funciones empresariales
              esenciales que se consideran imprescindibles en el entorno actual
              de negocios digitales. Que mejoran la experiencia del usuario,
              optimizan la eficiencia operativa y fortalecen la presencia en
              línea de tu empresa.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-3"
          >
            {team.map((person) => (
              <li key={person.name}>
                <img
                  alt=""
                  src={person.imageUrl}
                  className="aspect-[14/13] w-full rounded-2xl object-cover"
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-300">
                  {person.role}
                </p>
                <p className="text-sm leading-6 text-gray-500">
                  {person.location}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA section */}
        <div className="relative isolate -z-10 mt-32 sm:mt-40">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <img
                alt=""
                src="https://ttag-portfolio.s3.amazonaws.com/funciones_web/web-dev.webp"
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              />
              <div className="w-full flex-auto">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Cualidades de desarrollo
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Sitios maquetados desde cero por expertos, cada sitio
                  realizado cuenta con cualidades sobresalientes que resultan en
                  un sito profesional, a al altura de tu marca.
                </p>
                <ul
                  role="list"
                  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
                >
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-x-3">
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="h-7 w-5 flex-none"
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex">
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-indigo-400"
                  >
                    Explora nuestros proyectos{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
              className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            />
          </div>
        </div>
      </main>
      <ServicesCta />
      <SocialFooter />
    </div>
  );
}
