export class RandomNameHelper{

  generateRandomName(nameLength = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomName = '';
    for (let i = 0; i < nameLength; i++) {
      randomName += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomName;
  }

}
