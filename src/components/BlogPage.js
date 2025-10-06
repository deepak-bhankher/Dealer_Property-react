import BlogCard from './BlogCard';
import familyImage from '../assets/family_pic.jpg'; // ✅ Import image from assets

const blogPosts = [
  {
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353',
    category: 'New Properties',
    title: '5 Ways to Make Your Space Feel Like Home',
    author: 'Jesse Doe',
    date: 'February 17, 2016',
    comments: 0,
    excerpt: 'On the best lot at Phuket is situated the Kailua Residence and is a 7...',
  },
  {
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
    category: 'New Properties',
    title: '2 Easy DIY Projects for a Total Kitchen',
    author: 'Jesse Doe',
    date: 'February 17, 2016',
    comments: 0,
    excerpt: 'On the best lot at Phuket is situated the Kailua Residence and is a 7...',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    category: 'New Properties',
    title: 'The Pumpkin Carver’s Lake House',
    author: 'Jesse Doe',
    date: 'February 17, 2016',
    comments: 0,
    excerpt: 'On the best lot at Phuket is situated the Kailua Residence and is a 7...',
  },
];

const BlogPage = () => {
  return (
    <div className="py-16 px-4 md:px-12 bg-white min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center mt-10">From the Blog</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center items-stretch">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>

      {/* ✅ Image section from assets folder */}
      <div className="mt-20">
 <div className="w-full h-[800px] overflow-hidden">
  <img
  src={familyImage}
  alt="Happy family walking"
  className="w-full "
/>

</div>


      </div>
    </div>
  );
};

export default BlogPage;
