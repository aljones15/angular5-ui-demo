export class Notice {
  userName: string;
  message: string;
  profileUrl: string;
  genRandom(many: number) {
    return Math.floor(Math.random() * many));
  }
  genRandomMessage(): string {
    const m = this.genRandom(5);
    switch(m) {
      case 0 :
        return ' shared a link';
      case 1 :
        return ' edited a document';
      case 2 :
        return ' commented on an item';
      case 3:
        return ' posted a notice';
      case 4 :
        return ' completed a task';
      default:
        return ' endorsed a comment';
    }
  }
  constructor(userName: string, profileUrl: string) {
   this.userName = userName;
   this.profileUrl = profileUrl;
   this.message = this.genRandomMessage();
   this.favorites = this.genRandom(10);
   this.comments = this.genRandom(5);
  }
}
