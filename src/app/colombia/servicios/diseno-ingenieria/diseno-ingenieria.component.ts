import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../../services/pages.service';


@Component({
  selector: 'app-diseno-ingenieria',
  templateUrl: './diseno-ingenieria.component.html',
  styleUrls: ['./diseno-ingenieria.component.css']
})
export class DisenoIngenieriaComponent implements OnInit {
  loader = true;
  seccion_1_data: any = {};
  seccion_iconos_data: any[] = [];
  item_tab_data: any[] = [];
  texto_columna_0_data: any = {};
  texto_columna_1_data:any = {};
  texto_columna_2_data:any = {};
  public activePillIndex:number = 0;

  constructor(private disenoingenieria:PagesService) { }

  ngOnInit(): void {
    this.disenoingenieria.getDisenoIngenieria()
      .subscribe((res:any) => {
        this.loader = false;
        this.seccion_1_data = res.acf.seccion_1;
        this.seccion_iconos_data = res.acf.seccion_iconos;
        this.item_tab_data = res.acf.item_tab;
        this.texto_columna_0_data = res.acf.fondo;
        this.texto_columna_1_data = res.acf.texto_columna_1;
        this.texto_columna_2_data = res.acf.texto_columna_2;
      });
  }

  public selectPill(index:number) {
    this.activePillIndex = index;
    // do some other stuff if necessary...
   }

}
