const BlogCard = ({ image, category, title, author, date, comments, excerpt }) => {
  return (
    <div className="max-w-md h-full flex flex-col">
      <div className="relative overflow-hidden rounded-lg cursor-pointer group">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <p className="text-sm text-red-500 uppercase mt-3">In {category}</p>
      <h3 className="text-2xl font-semibold mt-2">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">
        By <span className="text-red-500">{author}</span> on{' '}
        <span className="text-red-500">{date}</span> /{' '}
        <span className="text-red-500">{comments} Comments</span>
      </p>
      <p className="text-gray-700 mt-2 flex-grow">{excerpt}</p>
      <div className="mt-3 flex items-center text-red-500 space-x-2 cursor-pointer group">
        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        <span className="group-hover:underline">View Details</span>
      </div>
    </div>
  );
};

export default BlogCard;
