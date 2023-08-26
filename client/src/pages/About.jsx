
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

export default function Example() {
  return (
    <div className="bg-white">
      <header>
        <Navbar />
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Where Sound Meets Style: Your Audio Destination.
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Discover SonicAura
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Welcome to SonicAura, where sound meets style. We're passionate about delivering the ultimate audio experience. Whether you're a music enthusiast, a gamer, or simply someone who appreciates crystal-clear sound, we've got you covered. Our curated selection of premium headphones offers the perfect blend of innovation and comfort. Explore our range to elevate your audio journey. Tune in, turn up, and immerse yourself in the world of sound with us.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <Link to='/products'>
                  Shop Now
                </Link>
              </div>
              <div className="text-sm font-semibold leading-6 text-gray-900">
                <Link to='/contact'>
                  Partner With Us <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
