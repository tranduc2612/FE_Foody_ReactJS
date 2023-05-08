import {Routes,Route } from 'react-router-dom';
import { publicRouter,privateRouter } from './routes';
import { FunctionComponent, useEffect, useMemo, useState } from 'react';
import {ILayoutDefault} from './components/Layout/DefaultLayout'



function App() {
  const [currentUser,setCurrentUser] = useState(false);
  let router = useMemo(()=> handleRouter(currentUser),[currentUser]);

  function handleRouter(isLogin:Boolean) {
    if(isLogin){
      return [...privateRouter];
    }else{
      return [...publicRouter];
    }
  }


  return (
      <Routes>
            {router.map((e,index)=>{
              const Page:FunctionComponent = e.page;
              const Layout:FunctionComponent<ILayoutDefault> = e.layout;

              return <Route key={index} path={e.path} element={
                  <Layout>
                      <button onClick={() =>currentUser ? setCurrentUser(false) : setCurrentUser(true)}>{currentUser?"LogOut":"LogIn"}</button>
                      <Page />
                  </Layout>}>
              </Route>})
            }
      </Routes>
  )
}

export default App
