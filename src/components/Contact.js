import React from "react";

function Contact() {
  return (
    <div>
     
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6 mt-10">
          
        
          <div className="flex justify-center">
            <img
              src="/contact_pic.jpg"  
              alt="Contact"
              className="rounded-2xl shadow-xl w-[90%] max-w-lg"
            />
          </div>
          
          {/* Right Side Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name *"
                className="w-full border border-gray-300 rounded-lg p-3"
                required
              />
              <input
                type="email"
                placeholder="E-mail *"
                className="w-full border border-gray-300 rounded-lg p-3"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg p-3"
              />
              <textarea
                placeholder="Message"
                className="w-full border border-gray-300 rounded-lg p-3 h-32"
              ></textarea>
              <button
                type="submit"
                className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Subscription Form Section */}
      <section className="bg-teal-200 py-10">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Sign Up for Updates</h2>
          <p className="mb-4 text-gray-700">Stay updated with the latest news and offers.</p>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="Please, enter your email address."
              className="w-2/3 border border-gray-300 rounded-l-lg py-3 px-4"
            />
            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-3 rounded-r-lg hover:bg-gray-900 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
