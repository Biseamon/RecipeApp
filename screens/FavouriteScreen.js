import { Text } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../assets/data/dummy-data";

function FavouriteScreen() {
    const favouriteMealCtx = useContext(FavouritesContext);
    const favouriteMeals = MEALS.filter((meal) => favouriteMealCtx.ids.includes(meal.id));
    if (favouriteMeals.length === 0) {
        return <Text>You have no favourite meals yet. Start adding some!</Text>;
    }

    return <MealsList items={favouriteMeals} />;

}

export default FavouriteScreen;