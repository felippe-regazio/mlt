import styled from '@emotion/styled';
import { ReactNode, useRef } from 'react';

const AccordionWrapper = styled.div`
  border: solid 1px #ccc;
  display: block;
  border-radius: 8px;
  margin-bottom: 16px;
  
  .accordion__summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;

    > span:first-of-type, label {
      display: flex;
      gap: 8px;
      cursor: pointer;
      align-items: center;
      margin: 0;

      input {
        margin: 0;
      }
    }

    p {
      margin: 0;
    }
  }

  .accordion__content {
    padding: 16px;
    display: none;
  }
  
  &[data-open=true] {
    .accordion__summary {
      border-bottom: solid 1px #ccc;
    }

    .accordion__content {
      display: block;
    }  
  }
`;

type AccordionProps = { 
  open?: boolean|null,
  title: string|ReactNode
}

export const Accordion: React.FC<React.PropsWithChildren<AccordionProps>> = ({ title, open, children }) => {
  const accordionRef: any = useRef();
  
  return(
    <AccordionWrapper 
      data-open={open} 
      ref={accordionRef}
    >
      <div className="accordion__summary">
        <span>{ title }</span>
      </div>

      <div className="accordion__content">
        { children }
      </div>
    </AccordionWrapper>
  )
}
