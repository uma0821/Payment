import { BrowserRouter, Routes, Route } from "react-router-dom";
import Paypal from './payment/paypal';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Paypal total={250} order_id={'TEST00001'} />}>
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/failed" element={<Failed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Confirm() {
  return (<h1>Payment Success</h1>);
}

function Failed() {
  return (<h1>Payment Failed</h1>);
}

export default App;
