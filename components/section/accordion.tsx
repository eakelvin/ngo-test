import React from 'react';
import {
    Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from "@/components/ui/accordion";

type AccordionItemType = {
    value: string;
    question: string;
    answer: string;
}

type Props = {
    accordionItems: AccordionItemType[]
}

const AccordionComp = ({ accordionItems }: Props) => {
    return (
        <Accordion type="single" collapsible className="w-full">
            {accordionItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className='text-left'>
                        {item.question}
                    </AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default AccordionComp;