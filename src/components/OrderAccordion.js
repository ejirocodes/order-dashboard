import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Tr,
  Tbody,
  Td,
  Table,
} from '@chakra-ui/react';

export default function OrderAccordion() {
  return (
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
  );
}
