export interface Projects {
  projectId: number;
  projectName: string;
  projectStatus: string;
  projectDeadline: Date;
}
export interface ProjectTeam {
  empId: number;
  empName: string;
  empRole: string;
  leaveFrom: Date;
  leaveTo: Date;
}
export interface TeamList {
  projectId: number;
  members: ProjectTeam[];
}
export interface Employees {
  empId: number;
  empName: string;
  empRole: string;
  assignedProjects: string[] | null;
}
