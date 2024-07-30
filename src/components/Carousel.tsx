import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface BoxItem {
  title: string;
  subTitle: string;
}

interface CarouselProps {
  items: BoxItem[];
  subTitle?: string;
}

const Carousel: React.FC<CarouselProps> = ({ items, subTitle }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  // Determine the number of items to show per page based on the screen size
  const isMobile = window.innerWidth <= 768;
  const itemsPerPage = isMobile ? 1 : 3;

  // Calculate the maximum number of steps needed for pagination
  const maxSteps = Math.ceil(items.length / itemsPerPage);

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      Math.min(prevActiveStep + 1, maxSteps - 1)
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  const getItemsForCurrentStep = () => {
    const startIndex = activeStep * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  };

  React.useEffect(() => {
    const handleResize = () => {
      setActiveStep(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          color: "#000000",
          fontSize: "38px",
          fontWeight: "bold",
        }}
      >
        Minhas Pesquisas
      </div>
      <div className="carouselMobile">
        <Box
          sx={{
            maxWidth: 1000,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{
                minWidth: "auto",
                bgcolor: activeStep === 0 ? "grey.500" : "black",
                color: "white",
                "&:hover": {
                  bgcolor: activeStep === 0 ? "grey.500" : "black",
                },
              }}
            >
              <ChevronLeftIcon />
            </Button>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                overflow: "hidden",
                gap: 2,
                p: 2,
                flexDirection: isMobile ? "row" : "row",
                "@media (max-width: 768px)": {
                  overflowX: "auto",
                  scrollSnapType: "x mandatory",
                  "& > div": {
                    flex: "0 0 auto",
                    scrollSnapAlign: "start",
                  },
                },
              }}
            >
              {getItemsForCurrentStep().map((step, index) => (
                <Box
                  key={index}
                  sx={{
                    height: 230,
                    width: isMobile ? "100%" : 255,
                    border: "2px solid black",
                    borderBottom: "30px solid black",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    bgcolor: step.title === "VER TODAS" ? "black" : "grey.300",
                    color: step.title === "VER TODAS" ? "white" : "black",
                    "@media (max-width: 768px)": {
                      width: "100%",
                      maxWidth: "none",
                      flexShrink: 0,
                      marginBottom: 2,
                    },
                  }}
                >
                  {step.title === "RASCUNHO" ? (
                    <div
                      style={{
                        position: "absolute",
                        top: 25,
                        left: 15,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px",
                        }}
                      >
                        <Typography>{step.title}</Typography>
                        <img
                          src="./emptyStar.svg"
                          width={"21px"}
                          height={"24px"}
                          alt="empty star"
                        />
                      </div>
                      <Typography
                        style={{
                          color: "#C3C7CA",
                          fontWeight: "bold",
                          fontSize: "18px",
                        }}
                      >
                        {step.subTitle}
                      </Typography>
                    </div>
                  ) : step.title === "VER TODAS" ? (
                    <Typography sx={{ color: "white" }}>
                      {step.title}
                    </Typography>
                  ) : (
                    <>
                      <Box
                        sx={{
                          position: "absolute",
                          top: 8,
                          right: 8,
                          height: 6,
                          width: 6,
                          bgcolor: "#0ad2a5",
                          borderRadius: "50%",
                        }}
                      ></Box>
                      <div
                        style={{
                          position: "absolute",
                          top: 25,
                          left: 15,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <Typography style={{ fontSize: "12px" }}>
                          {step.title}
                        </Typography>
                        <Typography
                          style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                          {step.subTitle}
                        </Typography>
                      </div>
                    </>
                  )}
                </Box>
              ))}
            </Box>
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              sx={{
                minWidth: "auto",
                bgcolor: activeStep === maxSteps - 1 ? "grey.500" : "black",
                color: "white",
                "&:hover": {
                  bgcolor: activeStep === maxSteps - 1 ? "grey.500" : "black",
                },
              }}
            >
              <ChevronRightIcon />
            </Button>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            {Array.from({ length: maxSteps }, (_, index) => (
              <Box
                key={index}
                sx={{
                  height: 8,
                  width: 8,
                  bgcolor: index === activeStep ? "black" : "grey.500",
                  borderRadius: "50%",
                  mx: 0.5,
                }}
              />
            ))}
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Carousel;
