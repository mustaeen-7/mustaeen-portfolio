"use client";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="h-full flex flex-col overflow-scroll">
      {/* BLOG-POST 1*/}
      <Link href="/blogpost" passHref>
        <div className="flex lg:flex-row md:flex-row sm:flex-col pr-40 pl-40 mt-20 justify-center items-center">
          {/* BLOG-POST-IMAGE */}
          <div className="w-18 h-18 rounded-full bg-gray-300">
            <img
              src="/faheem.png.jpg"
              className="h-full w-full object-cover rounded-full"
              alt="Profile"
            />
          </div>
          {/* BLOG-POST-CONTENT */}
          <div className="flex flex-col gap-3 justify-start ml-4">
            {/* BLOG-POST-TITLE */}
            <h1 className="text-xl font-bold">Dr. Faheem Uddin</h1>
            {/* BLOG-POST-PARAGRAPH */}
            <p className="text-gray-600">
              This blog post is dedicated to appreciating Dr. Faheem Uddin for
              his remarkable dedication and service to the community. It offers
              a brief overview of his lifetime achievements and contributions.
            </p>
          </div>
        </div>
      </Link>
      {/* BLOG-POST 1*/}
      <div className="flex pr-40 pl-40 mt-20 justify-center items-center">
        {/* BLOG-POST-IMAGE */}
        <div className="w-18 h-18 rounded-full bg-gray-300 overflow-hidden">
          <img
            src="/char.webp"
            className="h-full w-full object-cover"
            alt="Profile"
          />
        </div>
        {/* BLOG-POST-CONTENT */}
        <div className="flex flex-col gap-3 justify-start ml-4">
          {/* BLOG-POST-TITLE */}
          <h1 className="text-xl font-bold">Hyderabad</h1>
          {/* BLOG-POST-PARAGRAPH */}
          <p className="text-gray-600">
            Hyderabad, the capital city of Telangana, India, is a bustling
            metropolis known for its rich history, vibrant culture, and economic
            significance. The city seamlessly blends the ancient with the
            modern, featuring stunning architectural landmarks such as the
            Charminar, Golconda Fort, and Qutb Shahi Tombs alongside
            contemporary structures like HITEC City and the Cyber Towers,
            symbolizing its status as a major IT hub.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
