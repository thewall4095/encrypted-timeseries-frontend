import { Injectable } from "@angular/core";
import { HttpClient, HttpBackend, HttpHeaders, HttpParams, HttpContext } from "@angular/common/http";
import { of, throwError } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private handler: HttpBackend) { }

  getTimeseriesData(params: any = {}) {
    return this.http
      .get(environment.apiUrl + "/getTimeseriesData", {
        params: params,
      })
      .pipe(
        map((res) => res || []),
        catchError((error) => throwError(error))
      );
  }
}
