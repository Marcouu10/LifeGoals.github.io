import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta-service.service';
import { Meta } from '../models/meta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  misMetas: Meta[] = [];
  nuevaMeta: string = '';

  
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    
    this.metaService.getMetas().subscribe(data => {
      this.misMetas = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as any)
        } as Meta;
      });
    });
  }

  
  agregar() {
    if (this.nuevaMeta.trim().length > 0) {
      this.metaService.addMeta(this.nuevaMeta).then(() => {
        this.nuevaMeta = ''; 
      });
    }
  }

  
  borrar(id: string) {
    if (id) {
      this.metaService.deleteMeta(id);
    }
  }
}
