import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  Output,
  EventEmitter,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"]
})
export class FiltersComponent implements OnInit {
  @Input() params: any;
  @Output() changeFilters = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  selectChange(e) {
    if (e.isUserInput) {
      this.changeFilters.emit({
        value: e.source.value,
        filterName: e.source._parent.id
      });
    }
  }
}
