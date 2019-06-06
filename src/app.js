import React from 'react'
import { Route,Switch ,Redirect} from 'react-router-dom'
import SelectPayment from './js/page/SelectPayment'
import Pay from './js/page/Pay'

const App = () => (
  < >
   

     
   <Switch>
        <Route  path="/select_payment" exact component={SelectPayment}/>
        <Route  path="/pay" component={Pay}/>
        <Redirect to="/select_payment" />
   </Switch>
      
   
  </>
)

export default App
