import React, { useContext } from "react";
import { DoctorContext } from "./context/DoctorContext";
import { Box, Grid } from "grommet";
import DoctorCard from "./DoctorCard";

const ListDoctors = (): React.ReactElement => {
  const { doctorList } = useContext(DoctorContext);
  return (
    <Box>
      <Grid columns="medium" gap="medium" justify="center">
        {doctorList.map((doctor) => (
          <DoctorCard doctor={doctor} key={doctor.npi} />
        ))}
      </Grid>
    </Box>
  );
};

export default ListDoctors;
