import { Component, OnInit } from '@angular/core';
import { Tag } from '../shared/tag.model';
import { TagService } from '../shared/tags.service';

@Component({
  selector: 'app-liste-tags',
  templateUrl: './liste-tags.component.html',
  styleUrls: ['./liste-tags.component.css'],
})
export class ListeTagsComponent implements OnInit {

  tagItems: Tag[];
  showCreerTag: Boolean = false;
  showModifierTag: Boolean = false;
  selectedTag: Tag;

  constructor(public tagService: TagService) {
  }

  /**
   * Permet de mettre à jour la liste des tags en cas de création ou suppression.
   */
  updateTagList() {
    this.tagService.getTagsList()
      .subscribe(data => {
        this.tagItems = data;
      });
  }

  onDelete() {
    this.updateTagList();
    this.showModifierTag = false;
  }

  onCreate() {
    this.updateTagList();
    this.showCreerTag = false;
  }

  toggleCreerTag() {
    this.showCreerTag = !this.showCreerTag;
    this.showModifierTag = false;
    this.selectedTag = null;
  }

  toggleModifierTag(tag: Tag) {
    this.showCreerTag = false;
    if (this.selectedTag === tag) {
      this.showModifierTag = false;
      tag = null;
    } else if (this.selectedTag !== tag) {
      this.showModifierTag = true;
    }
    this.selectedTag = tag;

  }

  ngOnInit() {
    this.updateTagList();
  }

}
