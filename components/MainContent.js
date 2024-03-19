import React from 'react';

const BlogPosts = () => {
  // Mock data for blog posts
  const blogPosts = [
    { id: 1, title: 'Lorem Ipsum', date: 'March 20, 2024', author: 'John Doe', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', },
    { id: 2, title: 'Dolor Sit Amet', date: 'March 18, 2024', author: 'Jane Smith', excerpt: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', },
    // Add more blog post data as needed
  ];

  return (
    <section className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{post.date} | By {post.author}</p>
            <p className="text-gray-700">{post.excerpt}</p>
            <a href={`/posts/${post.id}`} className="text-blue-600 hover:underline mt-2 block">Read more</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;
