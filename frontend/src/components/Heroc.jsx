import ca from '../assets/ca.png'
import cbb from '../assets/cb.png'
import ccc from '../assets/cc.png'
import cdd from '../assets/cd.png'


function heroc(){
    return (
        <section className="w-full bg-gray-50 py-20">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-gray-900">Our </span>
          <span className="text-blue-600">Client</span>
        </h2>
        <p className="text-gray-500 mt-4 text-lg">
          We're associated with India's popular insurance companies.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
          <img src={ca} alt="Bajaj" className="h-16 mx-auto object-contain" />
          <p className="mt-6 text-gray-700 font-medium">
            Bajaj General Insurance
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
          <img src={cbb} alt="HDFC" className="h-16 mx-auto object-contain" />
          <p className="mt-6 text-gray-700 font-medium">
            HDFC ERGO Insurance
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
          <img src={ccc} alt="Royal" className="h-16 mx-auto object-contain" />
          <p className="mt-6 text-gray-700 font-medium">
            Royal Sundaram Insurance
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
          <img src={cdd} alt="Chola" className="h-16 mx-auto object-contain" />
          <p className="mt-6 text-gray-700 font-medium">
            Cholamandalam Insurance
          </p>
        </div>

      </div>

    </section>
    )
}
export default heroc;