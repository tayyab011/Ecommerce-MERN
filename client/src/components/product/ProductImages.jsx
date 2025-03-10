import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ProductStore from "../../store/ProductStore";
const ProductImages = () => {
const { Details } = ProductStore();
  let imgages = [
    { original: Details[0].details.img1, thumbnail: Details[0].details.img1 },
    { original: Details[0].details.img2, thumbnail: Details[0].details.img2 },
    { original: Details[0].details.img3, thumbnail: Details[0].details.img3 },
    { original: Details[0].details.img4, thumbnail: Details[0].details.img4},
    { original: Details[0].details.img5, thumbnail: Details[0].details.img5 },
    { original: Details[0].details.img6, thumbnail: Details[0].details.img6 },
    { original: Details[0].details.img7, thumbnail: Details[0].details.img7 },
    { original: Details[0].details.img8, thumbnail: Details[0].details.img8 },
  ];
  
  return (
    <div>
      <ImageGallery autoPlay={true} items={imgages} />
    </div>
  );
};

export default ProductImages;
