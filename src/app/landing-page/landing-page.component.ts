import { Component } from '@angular/core';
import { Employees, Projects, TeamList } from './landing-page';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  team: any = null;
  projectTeamMembers = '';
  projectTeam: TeamList[] = [
    {
      projectId: 1,
      members: [
        {
          empId: 1,
          empName: 'Omar Sultan',
          empRole: 'SDE LEVEL I',
          leaveFrom: new Date('03-05-2024'),
          leaveTo: new Date('05-05-2024'),
        },
        {
          empId: 2,
          empName: 'Ahnaf Asif',
          empRole: 'Senior SDE LEVEL I',
          leaveFrom: new Date('09-05-2024'),
          leaveTo: new Date('09-06-2024'),
        },
      ],
    },
    {
      projectId: 2,
      members: [
        {
          empId: 3,
          empName: 'Kabir Ahmed',
          empRole: 'SDE LEVEL I',
          leaveFrom: new Date('03-05-2024'),
          leaveTo: new Date('05-05-2024'),
        },
        {
          empId: 4,
          empName: 'Ashik Ahmed',
          empRole: 'SDE LEAD',
          leaveFrom: new Date('09-05-2024'),
          leaveTo: new Date('09-06-2024'),
        },
      ],
    },
    {
      projectId: 3,
      members: [
        {
          empId: 5,
          empName: 'Fuadul Islam',
          empRole: 'SDE LEVEL I',
          leaveFrom: new Date('03-05-2024'),
          leaveTo: new Date('05-05-2024'),
        },
        {
          empId: 6,
          empName: 'Gautam Chowdhury',
          empRole: 'SDE LEAD',
          leaveFrom: new Date('09-05-2024'),
          leaveTo: new Date('09-06-2024'),
        },
      ],
    },
    {
      projectId: 4,
      members: [
        {
          empId: 1,
          empName: 'Omar Sultan',
          empRole: 'SDE LEVEL I',
          leaveFrom: new Date('03-05-2024'),
          leaveTo: new Date('05-05-2024'),
        },
        {
          empId: 4,
          empName: 'Ashik Ahmed',
          empRole: 'SDE LEAD',
          leaveFrom: new Date('09-05-2024'),
          leaveTo: new Date('09-06-2024'),
        },
      ],
    },
  ];
  projectList: Projects[] = [
    {
      projectId: 1,
      projectStatus: 'Not Started',
      projectName: 'IQ3Connect',
      projectDeadline: new Date('03-25-2025'),
    },
    {
      projectId: 2,
      projectStatus: 'Blocked',
      projectName: 'Vertigo Check',
      projectDeadline: new Date('06-18-2026'),
    },
    {
      projectId: 3,
      projectStatus: 'Started',
      projectName: 'Lorem',
      projectDeadline: new Date('11-18-2024'),
    },
    {
      projectId: 4,
      projectStatus: 'Not Started',
      projectName: 'Ipsum',
      projectDeadline: new Date('01-03-2025'),
    },
  ];
  employeeList: Employees[] = [
    {
      empId: 1,
      empName: 'Omar Sultan',
      empRole: 'SDE LEVEL I',
      assignedProjects: ['IQ3Connect', 'Ipsum'],
    },
    {
      empId: 2,
      empName: 'Ahnaf Asif',
      empRole: 'Senior SDE LEVEL I',
      assignedProjects: ['IQ3Connect'],
    },
    {
      empId: 3,
      empName: 'Kabir Ahmed',
      empRole: 'SDE LEVEL I',
      assignedProjects: ['Vertigo Check'],
    },
    {
      empId: 4,
      empName: 'Ashik Ahmed',
      empRole: 'SDE LEAD',
      assignedProjects: ['Vertigo Check', 'Ipsum'],
    },
    {
      empId: 5,
      empName: 'Fuadul Islam',
      empRole: 'SDE LEVEL I',
      assignedProjects: ['Lorem'],
    },
    {
      empId: 6,
      empName: 'Gautam Chowdhury',
      empRole: 'SDE LEAD',
      assignedProjects: ['Lorem'],
    },
  ];
  public onClick(id: number) {
    for (let project of this.projectTeam) {
      if (id === project.projectId) {
        this.team = project.members;
      }
    }
    for (let project of this.projectList) {
      if (id === project.projectId)
        this.projectTeamMembers = project.projectName;
    }
  }
  selectedProjectId = 0;
  selectedEmployeeId = 0;
}
