import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges
} from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit, OnChanges {
  @Input() tableData: any;
  @Input() tableColumns: any;
  @Input() tableAttribute: any;

  tableCulmens: any[] = [];
  displayedColumns: any[] = [];
  displayTableData: any[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.tableData && changes.tableData.currentValue) {
      this.displayTableData = changes.tableData.currentValue;
    }
    if (changes.tableColumns && changes.tableColumns.currentValue) {
      this.displayedColumns = changes.tableColumns.currentValue;
    }
    if (changes.tableAttribute && changes.tableAttribute.currentValue) {
      this.tableAttribute = changes.tableAttribute.currentValue;
    }
  }

  ngOnInit() {}
}
