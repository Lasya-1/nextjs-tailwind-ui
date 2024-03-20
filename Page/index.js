import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

const IndexPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <Header />
      <Sidebar isOpen={isSidebarOpen} />
      <MainContent />
    </div>
  );
};

export default IndexPage;
