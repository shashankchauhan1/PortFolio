function Project({ title, description, link, image }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4 sm:p-5 w-full md:w-[45%] hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="w-full h-40 sm:h-48 md:h-52 object-cover rounded mb-4"
      />
      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-300 mb-3">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-400 font-semibold hover:underline"
      >
        View Project →
      </a>
    </div>
  );
}

export default Project;
