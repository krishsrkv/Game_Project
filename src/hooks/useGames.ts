import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platform{
  id:number;
  name:string;
  slug:string;
}

export interface Game {
  id: number;
  name: string;
  background_image:string;
  parent_platforms:{platform:Platform}[]
  metacritic:number;

}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {

    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", {signal : controller.signal})
      .then((res) => {
        console.log("API Response:", res.data); // 👈 Add this for debugging
        setGames(res.data.results || []); // 👈 Fallback prevents undefined
      })
      .catch((err) => setError(err.message));
      return() => controller.abort();
  }, []);

return {games,error};



}

export default useGames