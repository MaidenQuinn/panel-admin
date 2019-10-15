import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from '../shared/tag.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TagService } from '../shared/tags.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ColorPickerService } from 'ngx-color-picker';

@Component({
  selector: 'app-modifier-tag',
  templateUrl: './modifier-tag.component.html',
  styleUrls: ['./modifier-tag.component.css']
})
export class ModifierTagComponent implements OnInit {
  @Input() tag: Tag[];
  public formTag: FormGroup = this.formBuilder.group({
    'label': ['', Validators.required],
    'color': ['', Validators.required],
  });

  @Output() update = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
    private tagService: TagService,
    private alertService: AlertService,
    private cpService: ColorPickerService,
  ) { }

  ngOnInit() {
  }

  deleteTag(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer le tag ? Cette action ne peut être annulée.')) {
      this.tagService.deleteTagById(id)
        .subscribe(
          data => {
            this.delete.emit(null);
            this.alertService.success('Le tag a bien été supprimé.');
          },
          error => {
            console.log(error);
            this.alertService.error('Le tag n\'a pas pu être supprimé.');
          });
    }
  }

  onSubmit() {
  }

  public onChangeColorHex8(color: string): string {
    const hsva = this.cpService.stringToHsva(color, true);
    if (hsva) {
      return this.cpService.outputFormat(hsva, 'rgba', null);
    }
    return '';
  }
}
