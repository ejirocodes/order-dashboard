import { Tr, Tbody, Td, Table } from '@chakra-ui/react';

import cargoBox from '../assets/cargo-box.svg';
import payment from '../assets/credit-card.svg';
import review from '../assets/sync.svg';
import OrderAccordion from './OrderAccordion';

export default function OrderSummary() {
  return (
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
          <img src={payment} alt="cargo box" className="step-icon payment" />
          <p className="font-grey">
            Step 2 <br />{' '}
            <span style={{ color: '#000', fontWeight: '700' }}>Payment</span>
          </p>
        </div>
        <div className="step-one flex center">
          <img src={review} alt="cargo box" className="step-icon review" />
          <p className="font-grey">
            Step 3 <br /> Review
          </p>
        </div>
      </div>
      <OrderAccordion />
      <Table variant="simple" style={{ marginTop: '5rem' }}>
        <Tbody>
          <Tr className="table-right">
            <Td className="total">Total amount</Td>
            <Td className="heading-main">$3897</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
}
