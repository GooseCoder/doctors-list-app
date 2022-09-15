import { Button, Card, CardBody, CardFooter, CardHeader, Image } from "grommet";
import { Calendar, ShareOption } from "grommet-icons";
import React from "react";
import { Doctor } from "./types/types";

const DoctorCard = ({ doctor }: { doctor: Doctor }): React.ReactElement => (
  <Card height="medium" width="medium" background="light-1">
    <CardHeader pad="small">
      <span>
        {doctor.first_name} {doctor.last_name} ({doctor.title})
      </span>
      <span>{doctor.primary_specialty.specialty}</span>
    </CardHeader>
    <CardBody>
      <Image fit="cover" src={doctor.image_url} />
    </CardBody>
    <CardFooter pad={{ horizontal: "small" }} background="light-2">
      <span>
        <ul>
          {doctor.procedures.map((procedure) => (
            <li key={procedure.id}>{procedure.procedure}</li>
          ))}
        </ul>
      </span>
      <span>
        {doctor.scheduling_enabled && (
          <Button icon={<Calendar color="plain" />} hoverIndicator />
        )}
        <Button icon={<ShareOption color="plain" />} hoverIndicator />
      </span>
    </CardFooter>
  </Card>
);

export default DoctorCard;
