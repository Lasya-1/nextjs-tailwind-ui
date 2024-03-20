import React from 'react';

const BlogPosts = () => {
  // Mock data for blog posts
  const blogPosts = [
    { id: 1, title: 'Introduction to React Hooks', date: 'March 20, 2024', author: 'John Doe', excerpt: 'Learn how to use React Hooks to manage state and side effects in functional components.' },
    { id: 2, title: 'Creating Responsive Layouts with Tailwind CSS', date: 'March 18, 2024', author: 'Jane Smith', excerpt: 'Explore the power of Tailwind CSS to easily create responsive and customizable UI layouts.' },
    { id: 3, title: 'Getting Started with Next.js', date: 'March 15, 2024', author: 'Alice Johnson', excerpt: 'A beginner\'s guide to building server-side rendered React applications with Next.js framework.' }
    // Add more blog post data as needed
  ];

 return (
    <section className="container mx-80 my-100">
      <div className="flex justify-center"> {/* Centering content */}
        <div className="w-4/5 mx-auto"> {/* Adjusted width and horizontal margin */}
          {/* Blog posts content goes here */}
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white shadow-md mx-auto mb-4 p-4 max-w-full"> {/* Added margin bottom and set maximum width to full */}
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-1">{post.date} | By {post.author}</p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              {/* Additional content for each post */}
            </div>
          ))}
        </div>
      </div>
    </section>
);


};

export default BlogPosts;
