export class DataService {
  private data: string[] = ['foo', 'bar', 'baz'];
  getData(): string[] {
    return this.data;
  }
  addData(name: string) {
    this.data.push(name);
  }
}
