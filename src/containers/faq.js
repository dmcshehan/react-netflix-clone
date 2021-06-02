import React from "react";
import faqData from "../fixtures/faqs.json";

import { Accordion } from "../components";

export default function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequesty Asked Questions</Accordion.Title>
      {faqData.map((faq) => (
        <Accordion.Item key={faq.id}>
          <Accordion.Header>{faq.header}</Accordion.Header>
          <Accordion.Body>{faq.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
