import {
  Stack,
  Paper,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardActions,
  Collapse,
  CardContent,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import React from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export function CardNormalitation({
  title,
  shortTitle,
  img,
  steps,
}) {

  const [expanded, setExpanded] = React.useState(false);

  const ExpandCard = () => {
    setExpanded(!expanded);
  };

  return (
      <Paper
        elevation={10}
        sx={{ maxWidth: "80%", width: "100%", marginY: "30px" }}
      >
        <Card sx={{ bgcolor: "#00a6fb" }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: "#051923", color: "#fff" }}
                aria-label="Forma normal"
              >
                {shortTitle}
              </Avatar>
            }
            title={<Typography sx={{ color: "#fff" }}>{title}</Typography>}
          />
          <CardMedia
            component="img"
            height="130"
            sx={{ objectFit: "contain" }}
            image={img}
            alt="foto de forma normal"
          />
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={() => ExpandCard()}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon sx={{ color: "#fff", scale: "1.34" }} />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {steps.map((step, index) => (
                <Stack direction={"column"} key={index}>
                  <Typography
                    sx={{ marginBottom: 2, color: "#fff", fontSize: "1.1rem" }}
                  >
                    {index + 1}. {step[1]}
                  </Typography>
                  <Box
                    component="img"
                    src={step[0]}
                    alt={`Imagen del paso ${index + 1}`}
                    sx={{ width: "100%", height: "auto", mb: 2 }}
                  />
                </Stack>
              ))}
            </CardContent>
          </Collapse>
        </Card>
      </Paper>
  );
}
