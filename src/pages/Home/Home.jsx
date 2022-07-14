import React from "react";
import HomeStyle from "./Home.style";
import axios from "axios";
import { useState } from "react";
import Header from "../../components/Header/Header";

const Home = () => {
  //! USESTATE
  const selectedMealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [recipes, setRecipes] = useState();
  const [query, setquery] = useState("egg");
  const [mealType, setmealType] = useState(selectedMealType[0]);

  //! APİ QUERY
  let API_KEY = "280a9f0207045a7b1eb040071263aca6";
  let API_ID = "742d542a";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&mealType=${mealType}`;

  //! ASYNC-AWAİT
  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      setRecipes(data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(recipes);
  //* Header gönderilen recipesları Card componetine basmadan kontrol etmek için kullanılır

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Header
        setquery={setquery}
        setmealType={setmealType}
        selectedMealType={selectedMealType}
        getData={getData}
      />
    </div>
  );
};

export default Home;
