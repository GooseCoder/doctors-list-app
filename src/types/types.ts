export interface DoctorFilters {
  name?: string;
  schedulingEnabled?: boolean;
  procedures?: string[];
}

export interface Specialty {
  id: number;
  specialty: string;
}

export interface Procedure {
  id: number;
  procedure: string;
}

export interface Doctor {
  npi: string;
  first_name: string;
  last_name: string;
  title: string;
  scheduling_enabled: boolean;
  image_url: string;
  primary_specialty: Specialty;
  procedures: Procedure[];
}
