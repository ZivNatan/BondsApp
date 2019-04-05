import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PortfolioService {
  constructor(private http: HttpClient) {}

  getMetadata() {
    return this.http.get("../assets/metadata.json");
  }
  getFilterData() {
    return this.http.get("../assets/filterData.json");
  }
  postPortfolios(page, count) {
    // should  be 'this.http.post' but getting  err 'Cannot POST /assets/portfolios.json'
    return this.http.get("../assets/portfolios.json");
  }
}
