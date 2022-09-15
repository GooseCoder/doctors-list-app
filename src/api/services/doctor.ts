import doctors from "../data/doctor_data.json";
import { Doctor, DoctorFilters } from "../../types/types";

export const getDoctors = ({
  name,
  schedulingEnabled,
  procedures,
}: DoctorFilters): Doctor[] => {
  return doctors.filter((doctor) => {
    let filterResult: boolean[] = [];
    if (schedulingEnabled !== undefined) {
      filterResult = [
        ...filterResult,
        schedulingEnabled === doctor.scheduling_enabled,
      ];
    }
    if (name !== undefined) {
      filterResult = [
        ...filterResult,
        doctor.first_name.toLowerCase().includes(name.toLowerCase()) ||
          doctor.last_name.toLowerCase().includes(name.toLowerCase()),
      ];
    }
    if (procedures !== undefined) {
      const commonProcedures = doctor.procedures.filter((procedure) =>
        procedures.includes(procedure.procedure)
      );
      filterResult = [...filterResult, commonProcedures.length > 0];
    }
    return filterResult.reduce((acc, filter) => {
      return acc && filter;
    }, true);
  });
};
