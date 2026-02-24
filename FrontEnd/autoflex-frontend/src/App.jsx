import React, { useState } from 'react';
import MaterialCrud from './components/MaterialCrud';
import ProductCrud from './components/ProductCrud';
import ProductionDashboard from './components/ProductionDashboard';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="app-container">
      {/* FULLY FLUID HEADER */}
      <header className="main-header shadow-sm">
        <div className="container-fluid px-5 d-flex justify-content-between align-items-center h-100">
          <div className="logo-box">
            <span className="logo-auto">AUTO</span>
            <span className="logo-flex">FLEX</span>
            <small className="logo-subtitle d-none d-lg-inline"> | INDUSTRIAL MANAGEMENT</small>
          </div>
          <div className="header-tag">INVENTORY AND PRODUCTION MANAGEMENT SYSTEM</div>
        </div>
      </header>

      {/* EXPANDED CONTENT AREA*/}
      <main className="container-fluid px-5">
        <div className="row">
          <div className="col-12">
            
            {/* Wide-water navigation */}
            <nav className="nav-bar-custom mb-4 shadow-sm">
              <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`}
                    onClick={() => setActiveTab('dashboard')}
                  >
                    🚀 PRODUCTION
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'materials' ? 'active' : ''}`}
                    onClick={() => setActiveTab('materials')}
                  >
                    📦 RAW MATERIALS
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'products' ? 'active' : ''}`}
                    onClick={() => setActiveTab('products')}
                  >
                    🛠️ PRODUCTS
                  </button>
                </li>
              </ul>
            </nav>

            {/* DYNAMIC SECTION (FULL WIDTH)*/}
            <div className="content-wrapper">
              {activeTab === 'dashboard' && <ProductionDashboard />}
              {activeTab === 'materials' && <MaterialCrud />}
              {activeTab === 'products' && <ProductCrud />}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;