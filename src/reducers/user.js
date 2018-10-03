import { generateUser } from "../static-data";

export default function user(state = generateUser(), action) {
    // console.log('da vao user');
    return state;
}