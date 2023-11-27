import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Carousel from "react-bootstrap/Carousel";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../style/style.css"

// import Layout from "../components/Layout";
import Cards from './Cards'

export default function Info() {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const handleonebhk = () => {
    navigate("/list");
  };
  return (
    
    <div className="mt-2.5">
      <Carousel fade>
        <Carousel.Item>
          <div className="carouselimage">
            <img
              src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={1520}
              height={600}
              alt=""
              text="First slide"
            />
          </div>

          <Carousel.Caption>
            <div className="carouselcaption">
              <p>
                <i>Welcome to Residio agency.</i>
              </p>
              <h2>
                <b>Discover your perfect comfort zone</b>
              </h2>
              <p>
                Be the first to get the best real estate deals before it hits{" "}
                <br />
                the mass market!
              </p>
              <p>Hot deals with one simple search!</p>
              {/* <div className="input-wrapper">
                <Searchbar setResults={setResults} />
                <Searchresult results={results} />
              </div> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselimage">
            <img
              src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={1520}
              height={600}
              alt=""
              text="Second slide"
            />
          </div>

          <Carousel.Caption>
            <div className="carouselcaption">
              <h2>
                <b>The Most Trusted Agency</b>
              </h2>
              <p>We keep our values most suitable for our costomers.</p>
              <p>
                Know more about us <Link>www.residioblog.com</Link>
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselimage">
            <img
              src="https://images.pexels.com/photos/5524165/pexels-photo-5524165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={1520}
              height={600}
              alt=""
              text="Third slide"
            />
          </div>

          <Carousel.Caption>
            <div className="carouselcaption">
              <h2>
                <b>Find your home where you will love to leave</b>
              </h2>
              <p>let us help you to find your Dream Place</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="review">
        <div className="reviewleft">
          <h3>
            <b>Residio.</b>
          </h3>
          <p>More than 40,000 trust Residio</p>
          <div className="reviewright">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <p>5-Star Rating (2k+ Reviews)</p>
          </div>
        </div>
      </div>
      <div className="types1">
        <h2>Featured Property types</h2>
        <p>find all types of property here</p>
      </div>
      <div>
        <Button className="button1" onClick={handleonebhk}>
          <h3 className="buttontext">1BHK</h3>
        </Button>
        <Button className="button2">
          <h3 className="buttontext">2BHK</h3>
        </Button>
        <Button className="button3">
          <h3 className="buttontext">3BHK</h3>
        </Button>
        <Button className="button4">
          <h3 className="buttontext">Apartment</h3>
        </Button>
        <Button className="button5">
          <h3 className="buttontext">Farmhouse</h3>
        </Button>
      </div>
      {/* ============================================================================================================ */}

      <div className="types2">
        <h2>Most viewed Property types by our customers</h2>
      </div>

      <div className="card-container ">
        <div className="cardleft">
          <Cards
            imgsrc={
              "https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Cover-Villas-In-Las-Vegasepb0310.jpg"
            }
            Title={"luxurious villa"}
            Text={
              <p>
                Our luxurious villa is one of most beautifull place get your
                hands on it before it get sold
              </p>
            }
            Location={"Hinjewadi, Pune"}
            Price={"$1000"}
            Discount={"$890"}
          />
        </div>
        <div className="cardmiddle">
          <Cards
            imgsrc={
              "https://assets.architecturaldigest.in/photos/61922845a69fa9f9fffb41cf/16:9/w_1920,c_limit/delhi%20farmhouse.png"
            }
            Title={"Farmhouse"}
            Text={
              <p>
                This amazing Farmhouse can be yours. Its budget friendly so
                grab it before it gets sold.
              </p>
            }
            Location={"Mumbai"}
            Price={"$90"}
            Discount={"$60"}
          />
        </div>
        <div className="cardright">
          <Cards
            imgsrc={
              "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            Title={"Interior Designs"}
            Text={
              <p>
                we will ensure you with most beautifull Interior Designs you
                want. just as you wish for.
              </p>
            }
            Location={"Hyderabad"}
            Price={"$110"}
            Discount={"$79"}
          />
        </div>
      </div>
    </div>
  
  );
}

