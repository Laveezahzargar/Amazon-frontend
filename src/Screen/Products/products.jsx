import './products.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import productDetail from '../products.json';


const Products = () => {
    return (
        <div className='productPage'>

            <div className="productTopBanner">
                <div className="productTopBannerItems">
                    Electronics
                </div>
                <div className="productTopBannerItemsSubMenu">Mobiles & Accessories</div>
                <div className="productTopBannerItemsSubMenu">Laptops & Accessories</div>
                <div className="productTopBannerItemsSubMenu">TV & Home Entertainment</div>
                <div className="productTopBannerItemsSubMenu">Audio</div>
                <div className="productTopBannerItemsSubMenu">Cameras</div>
                <div className="productTopBannerItemsSubMenu">Computer Peripherals</div>
                <div className="productTopBannerItemsSubMenu">Smart Technology</div>
                <div className="productTopBannerItemsSubMenu">Musical Instruments</div>
                <div className="productTopBannerItemsSubMenu">Office & Staionery</div>
            </div>

            <div className="productsPageMain">

                <div className="productsPageMainLeftCategory">
                    <div className="productsPageMainLeftCategoryTitle">
                        Category
                    </div>
                    <div className="productsPageMainLeftCategoryContent">
                        <div className="productsPageMainLeftCategoryTitleContent">Computers & Accessories</div>
                        <div className="productsPageMainLeftCategoryContentSub">Macbooks</div>
                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className='andUp'> & Up</div>
                        </div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className='andUp'> & Up</div>
                        </div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className='andUp'> & Up</div>
                        </div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className='andUp'> & Up</div>
                        </div>

                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>



                    </div>
                </div>

                <div className="productsPageMainRight">

                    <div className="productsPageMainRightTopBanner">
                        1-5 of results for <span className='productsPageMainRightTopBannerSpan'>Macbooks</span>
                    </div>

                    <div className="itemsImageProductPage">

                        {
                            productDetail.product.map((item, index) => {
                                return (
                                    <div className="itemsImageProductPageOne" key={item.id}>
                                        <div className="imgBloCkitemsImageProductPageOne">
                                            <img src={item.imageUrl} className="productImageProduct" />
                                        </div>
                                        <div className="productNameProduct">
                                            <div>{item.name}</div>
                                        </div>
                                        <div className="productNameProductRating">
                                            <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                            <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                            <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                            <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                            <StarOutlineIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                        </div>
                                        <div className="priceProductDetailPage">
                                            <div className="currencyText">Rs</div>
                                            <div className="rateHomeDetail">
                                                <div className="rateHomeDetailPrice">{item.price}</div>
                                                <div className="addtobasketBtn">Add To Cart</div>
                                            </div>
                                        </div>
                                        <div className="offProductPage">Upto 10% off on xselect cards</div>
                                        <div className="freeDeliveryHomepage">Free Delivery By Amazon</div>
                                    </div>
                                );
                            })
                        }

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Products;