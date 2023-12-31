import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

const heroTextureImports = importAll(
  require.context("../assets", false, /\.(png|jpe?g|svg)$/)
);

const HomeCarousel = () => {
  // const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <div
          onClick={onClickHandler}
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "black",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <MdNavigateBefore style={{ fontSize: "40px" }} />
        </div>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <div
          onClick={onClickHandler}
          style={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "black",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <MdNavigateNext style={{ fontSize: "40px" }} />
        </div>
      )}
    >
      {Object.values(heroTextureImports).map((texture, index) => (
        <div key={`carousel-image-${index}`}>
          <img
            src={texture}
            alt={`carousel-${index}`}
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />

          {/* <div
            style={{
              color: "white",
              padding: "20px",
              borderRadius: "1px",
              textAlign: "left",
              backgroundColor: "rgb(0, 0, 0, 0.4)",
              position: "absolute",
              top: "46%",
              left = {isNonMobile ? "10%" : "0"},
              right = {isNonMobile ? undefined : "0"},
              margin = {isNonMobile ? undefined : "0 auto"},
              maxWidth = {isNonMobile ? undefined : "240px"},
            }}
          ></div> */}
        </div>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
