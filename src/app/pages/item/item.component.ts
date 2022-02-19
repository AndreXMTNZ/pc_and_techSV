import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interface/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: any;
  id: any;

  
  constructor( private route: ActivatedRoute, 
               public productoService: ProductosService,
               public infoPaginaService: InfoPaginaService ) { }
  
  ngOnInit() {
    this.route.params
        .subscribe( parametros => {

          //console.log(parametros['id']);
          this.productoService.getProducto(parametros['id'])
              .subscribe( (producto: any)  => {
              this.id = parametros['id'];
              this.producto = producto; 
              //console.log(producto);
              
              })
        });

  }

}
