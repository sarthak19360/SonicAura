
import Navbar from "../components/Navbar"
import products from "../../data"
import { Link } from "react-router-dom"

export default function Products() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Premier Collection</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Redefine audio experiences, setting new standards for quality, style, and pure sound immersion.
            </p>
          </div>
          <br />
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Link to='/products/:pid' state={product.id}>
                    <img
                      src={product.img}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </Link>
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

/*
<a key={product.id} className="group">
  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
    <img
      src={product.img}
      className="h-full w-full object-cover object-center group-hover:opacity-75"
    />
  </div>
  <h3 className="mt-4 text-sm text-gray-700">{product.desc}</h3>
  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
</a>
*/
