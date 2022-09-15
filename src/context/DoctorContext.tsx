import React, { createContext, useState } from "react";
import { Doctor } from "../types/types";
import { getDoctors } from "../api/services/doctor";

interface DoctorContextType {
  doctorList: Doctor[];
  setDoctorList: any;
  loadingDoctorList: boolean;
  setLoadingDoctorList: any;
}

export const DoctorContext = createContext<DoctorContextType>({
  doctorList: [],
  setDoctorList: (doctorList: Doctor[]) => {},
  loadingDoctorList: true,
  setLoadingDoctorList: (loading: boolean) => {},
});

export const DoctorProvider = ({ children }: any): any => {
  const [doctorList, setDoctorList] = useState<Doctor[]>(getDoctors({}));
  const [loadingDoctorList, setLoadingDoctorList] = useState<boolean>(false);
  return (
    <DoctorContext.Provider
      value={{
        doctorList,
        setDoctorList,
        loadingDoctorList,
        setLoadingDoctorList,
      }}
    >
      {children}
    </DoctorContext.Provider>
  );
};
