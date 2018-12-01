import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 120px 0;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexColumn= styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRowBetween = styled(FlexRow)`
  justify-content: space-between;
  align-items: center;
`;

export const FlexRowCenter= styled(FlexRow)`
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  border: solid 1px #6C73A6;
`;

export const Head = styled.div`
  background: #1F1D33;
  border-bottom: solid 1px #6C73A6;
  height: 2.643em;
  color: #E5C700;
  padding: 0px 10px 0px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export const BoxWrapper = styled.div`
  background-color: #2D2A49;
  border-bottom: 1px solid #363358;
  border-top: 0;
  font-size: 1.143em;
  padding: 10px;
  position: relative;
  min-height: 80px;
`;

export const BoxTitle = styled.h1`
  font-size: 14px;
  color: #c2c2c2;
  
  &:hover {
    color: #FFFFFF;
    cursor: pointer;
  }
`;

export const BoxSpan = styled.span`
  font-size: 12px;
  color: #7E79AD;

  &:hover {
    color: #FFFFFF;
  }
`;

export const LoadButton = styled.div`
  margin-top: 20px;
  text-align: center;
  background-color: #205E7F !important;
  border-color: #85D6F1;
  border-radius: 2px;
  text-decoration: none;
  color: #FFFFFF;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  border-top: 1px solid #837FAC;
  box-shadow: 0px 2px 3px 0px rgba(00, 00, 00, 0.3);
  font-size: 14px;
  cursor: pointer;
  padding: 10px;
`;

export const ButtonQuestion = styled.span`
  background-color: #7459C8;
  color: #FFFFFF;
  border-radius: 3px;
  font-size: 12px;
  padding: 5px 10px;
  cursor: pointer;
  height: max-content;

  &:hover {
    background-color: #7d62d4;
  }
`;

export const Input = styled.input`
  outline: 0;
  box-shadow: inset 1px 1px 2px #2c2a48;
  background-color: #43416c;
  border: solid 1px #24233A !important;
  color: #cfcee9;
  padding: 10px;
  font-size: 0.929em;
  width: 100%;
  border-radius: 3px;
`;

export const Button = styled.div`
  background-color: #2c2a49;
  color: #FFFFFF;
  padding: 10px;
  border-radius: 3px;
  margin-right: 15px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #2e2c4c;
  }
`;