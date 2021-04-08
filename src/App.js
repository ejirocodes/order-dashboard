import './App.css';
import logo from './assets/logo.png';
import chevronDown from './assets/down-chevron.svg';
import padlock from './assets/padlock.svg';
import card1 from './assets/card1.png';
import card2 from './assets/card2.png';
import card3 from './assets/card3.png';
import mastercard from './assets/mastercard.png';

function App() {
  const creditCardValue = '1234 5678 9101 1121';
  const nameValue = 'Annette Murphy';
  return (
    <div className="App">
      <section className="dashboard bg-grey">
        <div className="dashboard-right">
          <header className="dashboard-header flex">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="user-info bg-grey flex	 ">
              <img src={chevronDown} alt="down" className="icon" />
              <p className="username">Annette</p>
              <img
                src="https://images.unsplash.com/photo-1528914457842-1af67b57139d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                alt="user"
                className="user-avatar"
              />
            </div>
          </header>
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
            <div className="tab">
              <div className="tab-items flex">
                <p>Credit Card</p>
                <p>PayPal</p>
                <p>Other</p>
              </div>
              <div className="credit-card__main flex btw">
                <div className="credit-card__left flex col">
                  <img src={card1} alt="card" className="credit-card" />
                  <img src={card2} alt="card" className="credit-card" />
                  <img src={card3} alt="card" className="credit-card" />
                </div>
                <div className="credit-card__right">
                  <form>
                    <div className="form-control">
                      <label htmlFor="creditCard">Credit card</label>
                      <div className="mastercard-wrapper">
                        <input
                          type="text"
                          id="creditCard"
                          className="bg-grey"
                          value={creditCardValue}
                        />
                        <img
                          src={mastercard}
                          alt="mastercard"
                          className="mastercard"
                        />
                      </div>
                    </div>
                    <div className="form-control">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="bg-grey"
                        value={nameValue}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default App;
