import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  getUserName(){
    return 'bpGw3M7H8eCpRQs14uypcnqk9KLiIEmD8h2CGSQAlko4FFXNnDQ2zLqZxrdtHU8V';
  }
  
  getKey(){
    return '2RBMpR7vlinBPxZbsOG8llEG9GJwddqfJ4hNmJBY8YAAxXyhLST5t3zphYMsMewhxZaH62c4sGu2rzlfBO3vPE7GdhmgTXQczwr2neRRzr1m9JvWOD0dIHcawjaMwIGOOCVhs8dhUKVOpVSFztLDYCUmcdlunwU4AJWDKUCpMfMtraMqwS2gBzkrgQJL1S5bJJuc9i8qbtbFHXeKHt71CfNn74Eddq31qBgtLpSiDzDU4NJf0CaEaDNcvbXpc7PI';
  }

  getUrl(){
    return 'https://mamasandbabys.com/index.php?route=api/';
  }

}
