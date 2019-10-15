import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TagService } from '../shared/tags.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ColorPickerService } from 'ngx-color-picker';
import { Tag } from '../shared/tag.model';

@Component({
  selector: 'app-creer-tag',
  templateUrl: './creer-tag.component.html',
  styleUrls: ['./creer-tag.component.css']
})
export class CreerTagComponent implements OnInit {

  @Output() create = new EventEmitter();
  public color;
  public rgbaText;

  public formTag: FormGroup = this.formBuilder.group({
    'label': ['', Validators.required],
    'color': ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder,
    private tagService: TagService,
    private alertService: AlertService,
    private cpService: ColorPickerService
  ) { }

  ngOnInit() {
  }

  public onChangeColorHex8(color: string): string {
    const hsva = this.cpService.stringToHsva(color, true);

    if (hsva) {
      return this.cpService.outputFormat(hsva, 'rgba', null);
    }

    return '';
  }

  onSubmit(tag: Tag) {
    this.tagService.createTag(tag)
      .subscribe(data => {
        this.create.emit(null);
        this.alertService.success('Le tag a bien été créé.', true);
      }, error => {
        console.log(error);
        this.alertService.error('Le tag n\'a pas pu être créé.', true);
      });
    Object.keys(this.formTag.controls).forEach(key => {
      this.formTag.controls[key].setErrors(null);
    });
  }
}
