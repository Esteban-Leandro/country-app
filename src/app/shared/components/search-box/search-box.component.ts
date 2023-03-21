import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit{

  private debouncer: Subject<string> = new Subject();

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebouncer: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300),
    )
    .subscribe(( value: string ) => this.onDebouncer.emit(value))
  }

  
  emitValue(value: string ): void {
    this.onValue.emit(value.toLowerCase())
  }

  onKeyPress( searchTerm: string ){
    this.debouncer.next( searchTerm );
  }

}
