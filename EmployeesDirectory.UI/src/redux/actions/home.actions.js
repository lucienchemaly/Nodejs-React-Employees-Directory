import { FETCH_DATA } from "./actions-types";

export function fetchEmployees(request) {
    return { type: FETCH_DATA, payload: request };
}
