import React, { useState } from "react";
import { Card, CardBody, Button, CardText } from "reactstrap";
import { Fade } from "reactstrap";
import styled from "styled-components";

const NasaCard = props => {
  const { title, image, exp, date } = props;

  const [fadeIn, setFadeIn] = useState(false);

  const toggle = () => setFadeIn(!fadeIn);

  const Description = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    color: ${props.primary ? "red" : "cyan"};
  `;

  const MyTitle = styled.h1`
    font-size: 2rem;
    color: blue;
  `;

  const NasaImage = styled.img`
    border-radius: 8%;
    width: 100%;
  `;

  const NasaImageContainer = styled.div`
    position: relative;
    text-align: center;
  `;

  return (
    <NasaImageContainer>
      <Card>
        <NasaImage src={image} alt="Nasa pic of the day" />
        <CardBody>
          <MyTitle>{title}</MyTitle>
          <div>
            <Button color="primary" onClick={toggle}>
              Learn More
            </Button>
            <Fade in={fadeIn} tag="h5" className="mt-3">
              <Description>{exp}</Description>
            </Fade>
          </div>
          <CardText>Date: {date}</CardText>
        </CardBody>
      </Card>
    </NasaImageContainer>
  );
};

export default NasaCard;
