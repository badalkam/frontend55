import axios from "axios";
import { useEffect, useState } from "react";
import { usePropStore } from "../store/store";

// custom hook
export function useFetch(query) {
  const [getData, setData] = useState({ apiData: {} });

  useEffect(() => {
    const fetchData = async () => {
      const propertyname = usePropStore.getState().propertyname;
        const bhk1 = usePropStore.getState().bhk1;
        const bhk2 = usePropStore.getState().bhk2;
        const bhk3 = usePropStore.getState().bhk3;
        const sell = usePropStore.getState().sell;
        const rent = usePropStore.getState().rent;
      try {
        const { data, status } = await axios.get(
          "https://serverace.onrender.com/api/search",
          { params: { propertyname, bhk1, bhk2, bhk3, sell, rent } }
        );

        const apiData = data;

        if (status === 201) {
          setData((prev) => ({ ...prev, apiData: data, status: status }));
          console.log(apiData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [query]);

  return [getData, setData];
}

export default useFetch;
