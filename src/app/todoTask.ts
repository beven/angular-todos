export class TodoTask {
  id: number;
  name: string;
  completed: boolean;

  constructor(name: string) {
    this.name = name;
  }
}
