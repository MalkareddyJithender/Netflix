import '../css/Faqs.css';
import React from 'react';
import faqsData from '../fixtures/faqs.json';
import Item from './Item';
import OptForm from './OptForm';

function Faqs() {
    return (
        <div className="faqsContainer">
            <div className="faqsContainer__div">
                <h1 className="faqsContainer__title">Frequently Asked Questions</h1>
                {
                    faqsData.map((item) =>
                    {
                        return (
                            <Item 
                            key={item.id}
                            header={item.header}
                            body={item.body}
                            />
                        );
                    })
                }
            <OptForm />
            </div>
        </div>
    )
}

export default Faqs;
