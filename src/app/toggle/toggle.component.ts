import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

export interface ToggleState {
  swtichValue: boolean;
}

export type ToggleStateReducer = (
  state: ToggleState,
  changes: Partial<ToggleState>
) => ToggleState;

@Component({
  selector: "toggle",
  templateUrl: "./toggle.component.html",
  styleUrls: ["./toggle.component.css"],
})
export class ToggleComponent implements OnInit {
  @Input() switchValue: boolean;
  @Input() stateReducer: ToggleStateReducer = (state, changes) => ({
    ...state,
    ...changes,
  });
  @Output() onChange: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  clickSwitch(value): void {
    // not use switchValue state here
    // this.switchValue = value
    this.onChange.emit(value);
  }
}
