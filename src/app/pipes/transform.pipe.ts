import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(text: string, length: number = 50, suffix: string = '...'): string {
    if (text.length > length) {
      text =  text.substring(0, length).trim() + suffix;
    }
    return text;
  }

}
