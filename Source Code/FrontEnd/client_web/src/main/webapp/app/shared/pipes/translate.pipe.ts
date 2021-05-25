import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Pipe({
  name: 'i18n',
})
export class Translate implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(query: any): any {
    if (!query) {
      return query;
    }
    return this.translate.instant(query);
  }
}
