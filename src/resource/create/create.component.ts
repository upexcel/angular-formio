import { Component, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormioResourceService } from '../resource.service';
import { FormioResourceConfig } from '../resource.config';

@Component({
  styleUrls: ['./create.component.scss'],
  templateUrl: './create.component.html'
})
export class FormioResourceCreateComponent {
  public onError: EventEmitter<any>;
  public onSuccess: EventEmitter<any>;
  constructor(
    public service: FormioResourceService,
    public route: ActivatedRoute,
    public router: Router,
    public config: FormioResourceConfig
  ) {
    this.onError = new EventEmitter();
    this.onSuccess = new EventEmitter();
  }

  onSubmit(submission: any) {
    this.service
      .save(submission)
      .then(() => {
        this.router.navigate(['../', this.service.resource._id, 'view'], {
          relativeTo: this.route
        });
      })
      .catch((err: any) => this.onError.emit(err));
  }
}
