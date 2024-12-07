import Container from "../ui/container";

const Services = () => {
  return (
    <Container className="pt-6">
      <h2 className="text-gray-800 sm:text-4xl text-2xl font-extrabold mb-12 text-center">
        Nuestras características
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-8">
        <div className="p-6 bg-white rounded-lg text-left shadow">
          <h3 className="text-gray-800 text-xl font-bold mb-4">
            Customization
          </h3>
          <p className="text-gray-500 text-sm">
            Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad
            consequat id. Dolore et sint mollit in nisi tempor culpa
            consectetur.
          </p>
          <button className="text-sm bg-transparent px-4 py-2 border border-blue-500 text-blue-500 mt-8 rounded-lg">
            Read More
          </button>
        </div>

        <div className="p-6 bg-blue-500 rounded-lg text-left shadow text-white">
          <h3 className="text-white text-xl font-bold mb-4">Security</h3>
          <p className="text-sm text-white">
            Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad
            consequat id. Dolore et sint mollit in nisi tempor culpa
            consectetur.
          </p>
          <button className="text-sm bg-transparent px-4 py-2 border border-white text-white mt-6 rounded-lg">
            Read More
          </button>
        </div>

        <div className="p-6 bg-white rounded-lg text-left shadow">
          <h3 className="text-gray-800 text-xl font-bold mb-4">Support</h3>
          <p className="text-gray-500 text-sm">
            Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad
            consequat id. Dolore et sint mollit in nisi tempor culpa
            consectetur.
          </p>
          <button className="text-sm bg-transparent px-4 py-2 border border-blue-500 text-blue-500 mt-8 rounded-lg">
            Read More
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Services;
