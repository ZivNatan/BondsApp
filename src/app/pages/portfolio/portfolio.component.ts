import { Component, OnInit } from "@angular/core";
import { PortfolioService } from "./portfolio.service";
import { TableComponent } from "../../shared/table/table.component";
import { FiltersComponent } from "../../shared/filters/filters.component";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"]
})
export class PortfolioComponent implements OnInit {
  constructor(private portfolioService: PortfolioService) {}
  // TOP_BAR
  actionSelected = {
    myPortfolio: true,
    createPortfolio: false,
    comparesPortfolio: false,
    search: false,
    alerts: false
  };
  // TOP_BAR

  // TABLE_DATA
  filterParams: any;
  tableData: any;
  tableColumns: any;
  tableAttribute: any;
  // TABLE_DATA

  // PAGNITOR
  length = 0;
  pageSize = 25;
  pageSizeOptions = [5, 10, 25, 100];
  pageIndex = 0;
  // PAGNITOR

  showComponents: any;

  ngOnInit() {
    let promise1 = this.portfolioService.getMetadata().toPromise();
    let promise2 = this.portfolioService.getFilterData().toPromise();
    let promise3 = this.portfolioService
      .postPortfolios(this.pageIndex, this.pageSize)
      .toPromise();

    Promise.all([promise1, promise2, promise3]).then(values => {
      this.tableColumns =
        values[0][
          "sections"
        ].section_portfolio_attributes.portfolio_attribute_elements;
      this.tableAttribute = values[0]["portfolio_attribute_elements"];
      this.length = values[2]["portfolios"].items.length;
      this.tableData = values[2]["portfolios"].items.splice(
        this.pageIndex,
        this.pageSize
      );
      this.filterParams = values[1];
      this.showComponents = values[0]["components"];
    });
  }

  activeSelected(key) {
    Object.keys(this.actionSelected).map(item => {
      this.actionSelected[item] = false;
      return item;
    });
    this.actionSelected[key] = true;
  }

  handleTablePage(e) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    const stratPage = this.pageIndex * this.pageSize;
    const endPage = this.pageIndex * this.pageSize + this.pageSize;
    this.portfolioService
      .postPortfolios(this.pageIndex, this.pageSize)
      .subscribe(response => {
        this.tableData = response["portfolios"].items.splice(
          stratPage,
          this.pageSize
        );
      });
  }

  getFilterChanges(e) {
    alert(
      `server call with filter name: ${e.filterName} and value of: ${
        e.value
      } should  be executed, current page index:  ${
        this.pageIndex
      } and current page size: ${this.pageSize}`
    );
  }
}
