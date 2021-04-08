import HeaderMain from '../components/HeaderMain';
import PaymentTab from '../components/PaymentTab';
import OrderSummary from '../components/OrderSummary';

import padlock from '../assets/padlock.svg';

export default function Dashboard() {
  return (
    <section className="dashboard bg-grey flex">
      <div className="dashboard-left">
        <HeaderMain />
        <section className="main">
          <div className="main-top flex">
            <h1 className="heading-main">Payment details</h1>
            <div className="main-top__right flex">
              <img src={padlock} alt="down" className="icon padlock" />
              <div>
                <h3 className="heading">Card is secure</h3>
                <p className="lead">
                  Your data is protected <br /> everything will be private
                </p>
              </div>
            </div>
          </div>
          <PaymentTab />
        </section>
      </div>
      <OrderSummary />
    </section>
  );
}
