import { Container } from "react-bootstrap";
import CoinsTable from "./components/CoinsTable";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState(0)
  const {data, isLoading, isError} = useQuery(
    ['coins', page],  // queryKey
    () => fetchCoins(page), // queryFN
    {
      keepPreviousData: true // options
    }
  );

  async function fetchCoins(skip = 0) {
    const {data} = await axios.get(
      `https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=10`
    );

    return data.coins;
  }


  if (isLoading) {
    return <h3>Идёт загрузка...</h3>
  }

  if (isError) {
    return <h3>Ошибка при получении данных</h3>
  }

  if (!data) {
    return <h3>Нет данных</h3>
  }


  return (
    <div className="container">
      <h1>Some shi*</h1>
      <Container style={{marginTop: 30, maxWidth: 600}}>
        <CoinsTable data={data} />

        <button
          onClick={() => setPage((p) => p - 10)} 
          disabled={!page}
        >
          Назад
        </button>
        <button
          onClick={() => setPage((p) => p + 10)} 
        >
          Вперед
        </button>
      </Container>
    </div> 
  )
}
