import request from '../utils/request';
import {delay} from '../utils/request';


// export async function login(payload) {
//   return request('http://127.0.0.1/login');
// }

export function login(payload){
  delay(payload)
}
