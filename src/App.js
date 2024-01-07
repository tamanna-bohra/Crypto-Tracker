import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { CryptoDetails, Cryptocurrencies, Homepage, Navbar, News, Exchanges } from './components';

function App() {
  return (
    <div className="app">
      <h2>Cryptoverse</h2>

      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Homepage />} />
             
              <Route exact path='/exchanges' element={<Exchanges />} />
              <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />

              <Route exact path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
         
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            CryptoTracker <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>

        </div>
      </div>

    </div>
  );
}

export default App;
