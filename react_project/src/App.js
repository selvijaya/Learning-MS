import React from 'react'
import logo from './logo.svg';
import './App.css';
// import {Component} from './component/component'
// import Welcome from './component/welcome';
// import Forms from './component/Forms';
// import LifecycleA from './component/LifecycleA';
// import FragmentDemo from './component/FragmentDemo';
// import Table from './component/Table';
// import Parentcomponent from './component/Parentcomponent';
// import Refcomp from './component/Refcomp';
// import FRparentinput from './component/FRparentinput';
// import PortalDemo from './component/PortalDemo';
// import Hero from './component/Hero';
// import ErrorHandler from './component/ErrorHandler';
// import ClickCounter from './component/ClickCounter';
// import HoverHandler from './component/HoverHandler';
// import WithCounter from './component/withCouter'
// import Counter from './component/Counter';
// import Click from './component/Click';
// import Hover from './component/Hover';
import ComponentC from './component/ComponentC';
import {UserProvider} from './component/UserContext'
// function App() {
  // return (
    // <div className="App">
      {/* <Component/>
      <Welcome /> */}
      {/* <Forms/>
      <LifecycleA/> */}
      {/* <FragmentDemo/>
      <Table /> */}
      {/* <Parentcomponent /> */}
      {/* <Refcomp /> */}
      {/* <FRparentinput/> */}
      {/* <ErrorHandler>
      <Hero name="muthu"></Hero>
      </ErrorHandler>
      <ErrorHandler>
      <Hero name="selvi"> </Hero>
      
      </ErrorHandler>
      <ErrorHandler>
      <Hero name="jenith"> </Hero>
      </ErrorHandler> */}
      {/* <PortalDemo/> */}
      {/* <ClickCounter name="Priya looser"/>
      <HoverHandler/> */}
      {/* <WithCounter/> */}
      {/* <Counter
      render={(count,increment)=>(
        <Click count={count} increment={increment}/>
  )}/>
      <Counter
      render={(count,increment)=>(
        <Hover count={count} increment={increment}/>
  )}/> */}
     
{/* 
    </div>
  );
}

export default App; */}

class App extends React.Component {
  render() {
    return (
      <div>
         {/* user provider gives user need value */}
        <UserProvider value ="MuthuSelvi"> 
         <ComponentC />
        </UserProvider>
      </div>
    )
  }
}

export default App
