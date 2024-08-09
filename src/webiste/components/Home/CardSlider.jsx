// import React from 'react';
// import { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import styled from 'styled-components';
// import './Catagories.css'

// const StyledSlider = styled.div`
//   border-radius: 10px;
// `;
// const Card = styled.div`
//   padding: 5px;
//   margin: 10px;
//   text-align: center;
//   border-radius: 10px;
//   cursor: pointer;
//   transition: box-shadow 0.3s ease-in-out;
//   box-shadow: ${({ isClicked }) => (isClicked ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none')};
//   border:${({isClicked})=>(isClicked ?'2px solid blue':'none' )}

//   &:hover {
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//     transition:0.2s all ease-in; 
//   }
// `;

// const Image = styled.img`
//   width: 250px;
//   height: 250px;
//   margin:auto;
//   border-radius: 10px 10px 0 0;
// `;
// const CardTitle = styled.h3`
//   font-size: 1.2rem;
//   color: #0177ff;
//   margin-top: 10px;
//   font-weight: 600;
//   font-family: 'Poppins', sans-serif;
// `;


//   const CardSlider = ({ settings, data }) => {
//     const [clickedIndex, setClickedIndex] = useState(null);

//     const handleCardClick = (index) => {
//       setClickedIndex(index === clickedIndex ? null : index);
//     };
//   return (
//     <div className="slider-container">
//          <StyledSlider>
//       <Slider {...settings}>
//         {data.map((item, index) => (
//           <Card key={index}>
//             <Image src={item.images} alt={item.data} />
//             <CardTitle>{item.data}</CardTitle>
//           </Card>
//         ))}
//       </Slider>
//     </StyledSlider>
//     </div>
//   );
// };

// export default CardSlider;










import React from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import './Catagories.css'

const StyledSlider = styled.div`
  border-radius: 10px;
`;
const Card = styled.div`
  padding: 5px;
  margin: 10px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: ${({ isClicked }) => (isClicked ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none')};
  border:${({isClicked})=>(isClicked ?'2px solid black':'none' )}

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition:0.2s all ease-in; 
  }
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  margin:auto;
  border-radius: 10px 10px 0 0;
`;
const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #0177ff;
  margin-top: 10px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
`;


  const CardSlider = ({ settings, data }) => {
    const [clickedIndex, setClickedIndex] = useState(null);

    const handleCardClick = (index) => {
      setClickedIndex(index === clickedIndex ? null : index);
    };
  return (
    <div className="slider-container overflow-hidden">
         <StyledSlider>
      <Slider {...settings}>
        {data.map((item, index) => (
          <Card key={index}>
            <Image src={item.images} alt={item.data} />
            <CardTitle>{item.data}</CardTitle>
          </Card>
        ))}
      </Slider>
    </StyledSlider>
    </div>
  );
};

export default CardSlider;
