import {Component, NgZone, OnInit} from '@angular/core';
import {PortariaService} from '../../shared/portaria/portaria.service';
import {Portaria} from '../../shared/portaria/portaria';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-portaria',
  templateUrl: './portaria.component.html',
  styleUrls: ['./portaria.component.css'],
  providers: [PortariaService]
})
export class PortariaComponent implements OnInit {

  dtOptions: any = {};
  dtTrigger: Subject<Portaria> = new Subject();
  portarias: Portaria[] = [];
  portariaSelecionado: Portaria = new Portaria;

  constructor(private portariaservice: PortariaService, private zone: NgZone) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      select: true
    };
    this.portariaservice.getAll()
      .subscribe(p => {
        this.portarias = p;
        this.dtTrigger.next()
      });
  }

  clickHandler(portaria: Portaria): void {
    alert(portaria);
  }

}
