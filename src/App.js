import './App.css';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Th,
  Tfoot,
  Tr,
  Tbody,
  Td,
  Table,
  TableCaption,
  Thead,
} from '@chakra-ui/react';
import logo from './assets/logo.png';
import chevronDown from './assets/down-chevron.svg';
import padlock from './assets/padlock.svg';
import card1 from './assets/card1.png';
import card2 from './assets/card2.png';
import card3 from './assets/card3.png';
import mastercard from './assets/mastercard.png';
import visibility from './assets/visibility.svg';
import cargoBox from './assets/cargo-box.svg';
import payment from './assets/credit-card.svg';
import review from './assets/sync.svg';

function App() {
  const creditCardValue = '1234 5678 9101 1121';
  const nameValue = 'Annette Murphy';
  const expirationValue = '8/2021';
  const cvv = '407';

  const handleForm = () => {
    console.log('input clicked');
  };
  return (
    <div className="App">
      <section className="dashboard bg-grey flex">
        <div className="dashboard-left">
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
                          onChange={handleForm}
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
                      <button className="corfirm-order btn-fill">
                        Confrim order
                      </button>
                      <button className="corfirm-order btn-flat">
                        Cancel and Return
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="dashboard-right">
          <h1 className="heading-main ">Order summary</h1>
          <div className="order-steps flex btw">
            <div className="step-one flex center">
              <img src={cargoBox} alt="cargo box" className="step-icon cargo" />
              <p className="font-grey">
                Step 1 <br /> Free shipping
              </p>
            </div>
            <div className="step-one flex center ">
              <img
                src={payment}
                alt="cargo box"
                className="step-icon payment"
              />
              <p className="font-grey">
                Step 2 <br />{' '}
                <span style={{ color: '#000', fontWeight: '700' }}>
                  Payment
                </span>
              </p>
            </div>
            <div className="step-one flex center">
              <img src={review} alt="cargo box" className="step-icon review" />
              <p className="font-grey">
                Step 3 <br /> Review
              </p>
            </div>
          </div>
          <Accordion defaultIndex={[0]} allowToggle={true}>
            <AccordionItem>
              <h2 className="accordion-title">
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Prada
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Table variant="simple">
                  <Tbody>
                    <Tr className="table-right">
                      <Td className="font-grey">Leather mini-bag</Td>
                      <Td>$1850</Td>
                    </Tr>
                    <Tr className="table-right">
                      <Td className="font-grey">Estimated shipping</Td>
                      <Td>$1850</Td>
                    </Tr>
                    <Tr className="table-right">
                      <Td className="font-grey">Discount</Td>
                      <Td>$0.00</Td>
                    </Tr>
                    <Tr className="table-right">
                      <Td className="font-grey">Total</Td>
                      <Td>$2323</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="accordion-title">
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Dr.Martens
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Table variant="simple">
                  <Tbody>
                    <Tr className="table-right">
                      <Td className="font-grey">Leather mini-bag</Td>
                      <Td>$1850</Td>
                    </Tr>
                    <Tr className="table-right">
                      <Td className="font-grey">Estimated shipping</Td>
                      <Td>$1850</Td>
                    </Tr>
                    <Tr className="table-right">
                      <Td className="font-grey">Discount</Td>
                      <Td>$0.00</Td>
                    </Tr>
                    <Tr className="table-right">
                      <Td className="font-grey">Total</Td>
                      <Td>$2323</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2 className="accordion-title">
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Chanel
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Table variant="simple">
                  <Tbody>
                    <Tr className="table-right">
                      <Td className="font-grey">Leather mini-bag</Td>
                      <Td>$1850</Td>
                    </Tr>
                    <Tr className="table-right">
                      <Td className="font-grey">Estimated shipping</Td>
                      <Td>$1850</Td>
                    </Tr>
                    <Tr className="table-right">
                      <Td className="font-grey">Discount</Td>
                      <Td>$0.00</Td>
                    </Tr>
                    <Tr className="table-right">
                      <Td className="font-grey">Total</Td>
                      <Td>$2323</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}

export default App;
