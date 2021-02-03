import DbProvider from "./dbProvider";

export default class LocalStorageProvider  extends DbProvider{
  constructor(key) {    
    super();
    this.setKey(key);
    return new Promise((resolve, reject) => {
      resolve(this);
    });    
  }
  setKey(key){    
    const storageKeys = {
      Vika: "vikaStorageData",
      dad: "dadStorageData",
      mom: "momStorageData",
    };
    this.lsKey = storageKeys[key];    
  }
}
