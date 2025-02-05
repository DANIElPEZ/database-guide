import { Box, Stack } from "@mui/material";
import { CardNormalitation } from "./description";
import React from "react";
import { NORMALITATION } from "./../data/data";

export function MainContent() {
  return (
    <Box>
      <Stack direction="column" sx={{ alignItems: "center" }}>
          <CardNormalitation
            title={NORMALITATION.FN1.title}
            shortTitle={NORMALITATION.FN1.shortitle}
            img={NORMALITATION.FN1.img}
            steps={NORMALITATION.FN1.steps}
          />
        
          <CardNormalitation
            title={NORMALITATION.FN2.title}
            shortTitle={NORMALITATION.FN2.shortitle}
            img={NORMALITATION.FN2.img}
            steps={NORMALITATION.FN2.steps}
          />
        
          <CardNormalitation
            title={NORMALITATION.FN3.title}
            shortTitle={NORMALITATION.FN3.shortitle}
            img={NORMALITATION.FN3.img}
            steps={NORMALITATION.FN3.steps}
          />
      </Stack>
    </Box>
  );
}
