import React, { useContext, useEffect, useState } from "react";
import { Box, Select, TextInput } from "grommet";
import { Search } from "grommet-icons";
import { DoctorContext } from "./context/DoctorContext";
import { getDoctors } from "./api/services/doctor";
import { DoctorFilters } from "./types/types";

const FilterBar = (): React.ReactElement => {
  const [filters, setFilters] = useState<DoctorFilters>({});
  const { setDoctorList } = useContext(DoctorContext);
  const scheduling = ["YES", "NO"];
  const procedures = [
    "Botox",
    "Laser Hair Removal",
    "Chemical Peel",
    "Cool Sculpting",
  ];

  useEffect(() => {
    setDoctorList(getDoctors(filters));
  }, [filters]);

  return (
    <Box gap="small" direction={"row"}>
      <TextInput
        icon={<Search />}
        reverse
        placeholder="Name ..."
        onChange={(e) => {
          if (e.target.value !== "") {
            setFilters({ ...filters, name: e.target.value });
          } else {
            delete filters.name;
            setFilters({ ...filters });
          }
        }}
      />
      <Select
        clear
        options={scheduling}
        id="scheduling"
        placeholder="Scheduling enabled"
        onChange={(e) => {
          if (e.target.value !== "") {
            setFilters({
              ...filters,
              schedulingEnabled: e.target.value === "YES",
            });
          } else {
            delete filters.schedulingEnabled;
            setFilters({ ...filters });
          }
        }}
      />
      <Select
        clear
        options={procedures}
        id="procedures"
        placeholder="Procedures"
        onChange={(e) => {
          if (e.target.value !== "") {
            setFilters({ ...filters, procedures: [e.target.value] });
          } else {
            delete filters.procedures;
            setFilters({ ...filters });
          }
        }}
      />
    </Box>
  );
};

export default FilterBar;
