import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 p-4">
      <div className="flex items-center mb-4">
        <img src="/user-icon.svg" alt="User icon" className="w-8 h-8 mr-2" />
        <p className="text-blue-600 font-semibold">Hello, User</p>
        <img src="/bell-icon.svg" alt="Bell icon" className="w-6 h-6 ml-auto" />
      </div>
      <nav>
        <ul>
          <li><a href="#" className="flex items-center text-blue-600 hover:underline"><img src="/discussion-icon.svg" alt="Discussion icon" className="w-6 h-6 mr-2" />Discussion Forum</a></li>
          <li><a href="#" className="flex items-center text-blue-600 hover:underline"><img src="/market-icon.svg" alt="Market icon" className="w-6 h-6 mr-2" />Market Stories</a></li>
          <li><a href="#" className="flex items-center text-blue-600 hover:underline"><img src="/sentiment-icon.svg" alt="Sentiment icon" className="w-6 h-6 mr-2" />Sentiment</a></li>
          <li><a href="#" className="flex items-center text-blue-600 hover:underline"><img src="/market-icon.svg" alt="Market icon" className="w-6 h-6 mr-2" />Market</a></li>
          <li><a href="#" className="flex items-center text-blue-600 hover:underline"><img src="/sector-icon.svg" alt="Sector icon" className="w-6 h-6 mr-2" />Sector</a></li>
          <li><a href="#" className="flex items-center text-blue-600 hover:underline"><img src="/watchlist-icon.svg" alt="Watchlist icon" className="w-6 h-6 mr-2" />Watchlist</a></li>
          <li><a href="#" className="flex items-center text-blue-600 hover:underline"><img src="/events-icon.svg" alt="Events icon" className="w-6 h-6 mr-2" />Events</a></li>
          <li><a href="#" className="flex items-center text-blue-600 hover:underline"><img src="/news-icon.svg" alt="News/Interviews icon" className="w-6 h-6 mr-2" />News/Interviews</a></li>
        </ul>
      </nav>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-blue-600 hover:underline">Facebook</a>
          <a href="#" className="text-blue-600 hover:underline">Twitter</a>
          <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
