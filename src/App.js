import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import React from 'react'
import store from "./redux/Store";
import HooksCakeConainer from "./components/HooksCakeConainer";


function App() {
  return(
    <Provider store={store}>
    <div>
      <HooksCakeConainer/>
      <CakeContainer/>
    </div>

    </Provider>
  )
}

export default App;
