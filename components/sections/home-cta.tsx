import {
  PuzzlePieceIcon,
  CloudArrowDownIcon,
} from "@heroicons/react/24/outline";

export default function HomeCta() {
  return (
    <div className="relative isolate overflow-hidden bg-ttag py-28 md:pt-20 lg:pb-30 sm:pt-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white p-2 ring-1 ring-white/10">
                <PuzzlePieceIcon
                  className="h-6 w-6 text-ttag"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">
                Marketing Integral
              </dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Un equipo de expertos especializados para complementar con tu
                emprendimiento.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white p-2 ring-1 ring-white/10">
                <CloudArrowDownIcon
                  className="h-6 w-6 text-ttag"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">
                Respaldo y almacenamiento
              </dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Respaldo seguro en nuestro servidor privado y acceso remoto a
                todos tus archivos 24/7.
              </dd>
            </div>
          </dl>
          <div className="max-w-xl lg:max-w-lg lg:ml-20">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Solicita una consultoría gratuita hoy.
            </h2>
            <p className="mt-4 text-md leading-8 text-gray-400">
              Sabemos que cada negocio es único y tiene diferentes necesidades y
              objetivos. Por eso, ofrecemos un servicio adicional de consultoría
              en la que platicaremos las dudas que puedas tener con tu próxima
              estrategia de marketing digital.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-grey-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
              >
                Solicitar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr
    from-ttag to-ttag opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
export { HomeCta };
