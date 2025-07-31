export default function Footer() {
  return (
    <>
      <div className="flex flex-wrap flex-col w-full max-w-screen-xl mx-auto">
        <footer className="text-gray-700 font-semibold body-font">
          <div className="container pt-10 mx-auto">
            <div className="flex flex-wrap md:text-left text-center order-first">
              {/* Category 1 */}
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-bold text-black tracking-widest text-sm mb-3">
                  MEN'S COLLECTION
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-700 font-semibold hover:text-black">
                      T-Shirts
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 font-semibold hover:text-black">
                      Jeans
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 font-semibold hover:text-black">
                      Jackets
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 font-semibold hover:text-black">
                      Footwear
                    </a>
                  </li>
                </nav>
              </div>

              {/* Category 2 */}
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-bold text-black tracking-widest text-sm mb-3">
                  WOMEN'S COLLECTION
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-700 font-semibold hover:text-black">
                      Tops
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 font-semibold hover:text-black">
                      Dresses
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 font-semibold hover:text-black">
                      Skirts
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 font-semibold hover:text-black">
                      Heels
                    </a>
                  </li>
                </nav>
              </div>

              {/* Category 3 */}
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-bold text-black tracking-widest text-sm mb-3">
                  ACCESSORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-700 font-semibold hover:text-black">
                      Watches
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 font-semibold hover:text-black">
                      Bags
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 font-semibold hover:text-black">
                      Sunglasses
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 font-semibold hover:text-black">
                      Caps & Hats
                    </a>
                  </li>
                </nav>
              </div>

              {/* Subscribe */}
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-bold text-black tracking-widest text-sm mb-3">
                  SUBSCRIBE
                </h2>
                <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                  <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                    <label
                      htmlFor="footer-field"
                      className="leading-7 text-sm text-gray-800"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="footer-field"
                      name="footer-field"
                      className="w-full bg-white rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-1 focus:ring-gray-900 focus:border-gray-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <button className="cursor-pointer lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded font-bold">
                    Send
                  </button>
                </div>
                <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                  Get the latest updates on new arrivals and special offers.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
