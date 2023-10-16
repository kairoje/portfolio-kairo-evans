import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      id: 0,
      name: 'Budgeteer API',
      summary: 'Budgeteer is a financial management app that allows users to create personalized budgets and track expenses.',
      description: 'Budgeteer API is a group project built by fellow classmates and I, during Interapt\'s software engineering immersive. Budgeteer features an API designed to help users take control of their finances. Users can describe their monthly budget and select corresponding expenses. User can see their remaining budget, and accumulated expenses for a given month.',
      projectLink: 'https://github.com/kairoje/budgeteers-server',
      tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.POSTMAN, Tag.H2],
      pictures: ["/assets/budgeteerAPI-project-pics/api-doc-navbar.png", "/assets/budgeteerAPI-project-pics/example-output(JSON).png"]
    },
    {
      id: 1,
      name: 'Tic Tac Toe',
      summary: 'Tic Tac Toe project features a game with two players, X and O, allowing each to take turns clicking and marking the board\'s squares.',
      description: '',
      projectLink: 'https://github.com/kairoje/tictactoe_project1',
      tags: [Tag.JAVASCRIPT, Tag.HTML, Tag.CSS],
      pictures: ["/assets/tictactoe-project-pics/empty-board.png", "/assets/tictactoe-project-pics/o-wins-board.png", "/assets/tictactoe-project-pics/x-wins-board.png", "/assets/tictactoe-project-pics/draw-board.png"]
    },
    {
      id: 2,
      name: 'Rock, Paper, Scissors (CLI)',
      summary: 'A basic version of rock, paper, scissors allowing users to play against the computer or another player in the console.',
      description: '',
      projectLink: 'https://github.com/kairoje/rock-paper-scissors-CLI-',
      tags: [Tag.JAVA],
      pictures: ["/assets/rock-paper-scissors(CLI)-pics/cli-output.png"]
    }
  ]
  
  constructor() { }

  GetProjects() {
    return this.projects;

  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }

    return project;
  }
}