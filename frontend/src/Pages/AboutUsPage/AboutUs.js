import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import './AboutUs.css';

const AboutUsContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(3),
  opacity: 0,
  transition: "opacity 1s ease",
  position: "relative",
}));

const Heading = styled(Typography)({
  marginBottom: (theme) => theme.spacing(2),
});

const Paragraph = styled(Typography)({
  marginBottom: (theme) => theme.spacing(2),
});

const BackButton = styled(Button)({
  position: "absolute",
  bottom: (theme) => theme.spacing(2),
  right: (theme) => theme.spacing(2),
  backgroundColor: "red",
});

function AboutUs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <AboutUsContainer
          elevation={3}
          style={{ opacity: isLoaded ? 1 : 0 }}
        >
          <Heading variant="h3">About Us</Heading>
          <Paragraph variant="body1">
            Welcome to YummyGreek, the finest destination for authentic Greek
            cuisine. We are passionate about bringing the flavors of Greece to
            your table, offering a delightful culinary experience that will
            transport you to the streets of Athens.
          </Paragraph>
          <Paragraph variant="body1">
            At YummyGreek, we take pride in using the freshest ingredients,
            traditional recipes, and a touch of modern creativity to create
            dishes that will tantalize your taste buds. Whether you're a fan of
            moussaka, souvlaki, or baklava, our menu is designed to cater to all
            your Greek food cravings.
          </Paragraph>
          <Paragraph variant="body1">
            Our commitment to excellence extends beyond our food. We provide a
            warm and inviting atmosphere, where you can enjoy your meal with
            family and friends. Our friendly staff is dedicated to ensuring your
            dining experience is memorable.
          </Paragraph>
          <Paragraph variant="body1">
            Thank you for choosing YummyGreek. We look forward to serving you
            and sharing the rich flavors and traditions of Greece with you.
          </Paragraph>
          <BackButton
            variant="contained"
            onClick={handleGoBack}
            className="back-button"
          >
            BACK
          </BackButton>
        </AboutUsContainer>
      </Container>
      <Footer />
    </div>
  );
}

export default AboutUs;
