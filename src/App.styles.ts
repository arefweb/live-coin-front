import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeadArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MiddleArea = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const ChartWrapper = styled.div`
  width: 350px;
  height: 150px;
  background-color: #293143;
  border-radius: 5px;
  position: relative;
`;

export const ChartTitle = styled.span`
  color: #8699b8;
  position: absolute;
  left: 10px;
  top: 5px;
`;

export const FirstTitle = styled.h2`
  color: #fff;
  margin-bottom: 10px;
`;

export const SecondTitle = styled.h3`
  color: #fff;
  margin-top: 2px;
`;

export const TableContainer = styled.div`
  width: 1000px;
  background-color: #293143;
  border-radius: 8px;
  overflow: hidden;
`

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
`;

export const HeadCell = styled.th`
  color: white;
  font-weight: bold;
  padding: 3px 5px;
  text-align: start;
`;

export const BodyCell = styled.td`
  color: white;
  padding: 3px 5px;
  text-align: start;
  width: 100px;
`;

export const TableHeadRow = styled.tr`
  border-top: 2px solid #1d2330;
  border-bottom: 3px solid #1d2330;
`;

export const TableBodyRow = styled.tr`
  border-bottom: 2px solid #1d2330;
`;

export const CoinNameCell = styled.div`
  display: flex;
  flex-direction: column;
  & div:nth-child(2){
    font-size: 12px;
    color: #8699b8;
  }
`;