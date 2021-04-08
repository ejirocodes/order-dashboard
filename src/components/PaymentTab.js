import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import mastercard from '../assets/mastercard.png';
import visibility from '../assets/visibility.svg';

export default function PaymentTab() {
  const creditCardValue = '1234 5678 9101 1121';
  const nameValue = 'Annette Murphy';
  const expirationValue = '8/2021';
  const cvv = '407';

  const handleForm = () => {
    console.log('input clicked');
  };

  return (
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
                  onChange={handleForm}
                />
                <img src={mastercard} alt="mastercard" className="mastercard" />
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="bg-grey"
                value={nameValue}
                onChange={handleForm}
              />
            </div>
            <div className="form-bottom flex">
              <div className="form-control">
                <label htmlFor="expirationDate">Expiration date</label>
                <input
                  type="text"
                  id="expirationDate"
                  className="bg-grey expiration-date"
                  value={expirationValue}
                  onChange={handleForm}
                />
              </div>
              <div className="form-control">
                <label htmlFor="cvv">CVV</label>
                <div className="cvv-wrapper">
                  <input
                    type="text"
                    id="cvv"
                    className="bg-grey cvv"
                    value={cvv}
                    onChange={handleForm}
                  />
                  <img
                    src={visibility}
                    alt="visibility"
                    className="visibility"
                  />
                </div>
              </div>
            </div>
            <div className="button-container">
              <button className="corfirm-order btn-fill">Confrim order</button>
              <button className="corfirm-order btn-flat">
                Cancel and Return
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
