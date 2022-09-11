import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import SimpleAreaChart from "./components/SimpleAreaChart";
import SimpleBarChart from "./components/SimpleBarChart";
import LoaderText from "./components/LoaderText";
import {
  Wrapper,
  HeadArea,
  FirstTitle,
  SecondTitle,
  TableContainer,
  Table,
  HeadCell,
  BodyCell,
  TableHeadRow,
  TableBodyRow,
  CoinNameCell,
  MiddleArea,
  ChartWrapper,
  ChartTitle,
} from "./App.styles";


function App() {
  const [tableData, setTableData] = useState<{[key: string]: any}[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const socketRef: any = useRef();

  /**** Use Effects ****/
  useEffect(() => {
    // socketRef.current = io("http://localhost:5005/");
    socketRef.current = io("https://live-coin-server.onrender.com/");

    socketRef.current.on("new tableData", (data: any) => {
      setTableData(data);
      setIsLoaded(true);
    });

    const pageLoad = setTimeout(function(){
      socketRef.current.emit("page loaded", true);
    }, 0);

    const wakeUp = setInterval(function(){
      socketRef.current.emit("wake up", true);
    }, 15000);

    return () => {
      clearTimeout(pageLoad);
      clearInterval(wakeUp);
    }
  }, []);


  return (
    <Wrapper className="wrapper">
      <HeadArea>
        <FirstTitle>Cryptocurrency Prices Live</FirstTitle>
        <SecondTitle>Top Coins by Market Cap</SecondTitle>
      </HeadArea>
      <MiddleArea>
        <ChartWrapper>
          <ChartTitle>Market Cap</ChartTitle>
          <SimpleAreaChart />
        </ChartWrapper>
        <ChartWrapper>
          <ChartTitle>Volume 24H</ChartTitle>
          <SimpleBarChart />
        </ChartWrapper>
      </MiddleArea>
      <TableContainer>
        <Table>
          <thead>
            <TableHeadRow>
              <HeadCell style={{ width: "50px" }}>#</HeadCell>
              <HeadCell>Coin</HeadCell>
              <HeadCell>Price</HeadCell>
              <HeadCell>Market Cap</HeadCell>
              <HeadCell>Volume 24h</HeadCell>
              <HeadCell>Liquidity</HeadCell>
            </TableHeadRow>
          </thead>
          <tbody>
            {!isLoaded
              ? Array.from({ length: 5 }, (_, i) => i).map((_, i) => {
                  return (
                    <TableBodyRow key={i}>
                      <BodyCell>
                        <div style={{ width: "50px" }}>{++i}</div>
                      </BodyCell>
                      <BodyCell>
                        <CoinNameCell>
                          <LoaderText />
                        </CoinNameCell>
                      </BodyCell>
                      <BodyCell>
                        <LoaderText />
                      </BodyCell>
                      <BodyCell>
                        <LoaderText />
                      </BodyCell>
                      <BodyCell>
                        <LoaderText />
                      </BodyCell>
                      <BodyCell>
                        <LoaderText />
                      </BodyCell>
                    </TableBodyRow>
                  );
                })
              : tableData.map((coin, i) => {
                  return (
                    <TableBodyRow key={i}>
                      <BodyCell>
                        <div style={{ width: "50px" }}>{++i}</div>
                      </BodyCell>
                      <BodyCell>
                        <CoinNameCell>
                          <div>{coin.coin}</div>
                          <div>{coin.name}</div>
                        </CoinNameCell>
                      </BodyCell>
                      <BodyCell>
                        <div>{coin.price}</div>
                      </BodyCell>
                      <BodyCell>
                        <div>{coin.cap}</div>
                      </BodyCell>
                      <BodyCell>
                        <div>{coin.vol}</div>
                      </BodyCell>
                      <BodyCell>
                        <div>{coin.liq}</div>
                      </BodyCell>
                    </TableBodyRow>
                  );
                })}
          </tbody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
}


export default App;
