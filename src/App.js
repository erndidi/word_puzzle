import React, { Component } from 'react';
import Game from './component/game';
import { Layout, Space } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';



function App() {
  return (
    <div>
      <Layout>
        <Space>
          <Header>
            <h1>Word Puzzle</h1>
            <Content>
            <Game></Game>
            </Content>
         
          </Header>
        </Space>
      </Layout>
    </div>
  );
}

export default App;
