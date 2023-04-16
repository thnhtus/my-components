import React from 'react';
import './App.less';
import { Divider, Typography } from 'antd';

const { Title } = Typography;

const App: React.FC = () => {
  return (
    <div className="App">
      <Typography>
        <Title level={3}>My Components</Title>
        <Divider />
      </Typography>
    </div>
  );
};

export default App;
