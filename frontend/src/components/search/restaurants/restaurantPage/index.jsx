import Navbar from "../../../headers/Navbar";
import Footer from "../../../headers/Footer";
import RestaurantPageReviews from "./RestaurantPageReviews";
import RestaurantPageBanner from "./RestaurantPageBanner";
import {RestaurantPageContainer} from "../../../../styledcomponents/search/restaurants/restaurantPage/layout";

const RestaurantPage = () => {
    return (
        <RestaurantPageContainer>
            <Navbar />
            <RestaurantPageBanner />
            <RestaurantPageReviews />
            <Footer />
        </RestaurantPageContainer>
    )
}

export default RestaurantPage