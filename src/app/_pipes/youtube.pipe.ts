import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtube'
})
export class Youtube implements PipeTransform {

  constructor (private dom:DomSanitizer)
  {

  }

  transform(value: string, args:any)
  {
    const oembed = value.split('</oembed>');
    let body = '';
    oembed.forEach((item, index) => {
      body += oembed[index] + '</oembed>';
      const oembed1 = item.split('url="')[1];
      if (oembed1) {
        const oembed2 = oembed1.split('">')[0];
        if (oembed2) {
          const youtube = oembed2.split('https://www.youtube.com/watch?v=')[1];
          if (youtube) {
            body += '<div class="iframe-container"></center><iframe width="560" height="315" src="https://youtube.com/embed/' + youtube + '" frameborder="0"; scrolling="no"; allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen></iframe></div>';
          }
        }
      }
    });
    return this.dom.bypassSecurityTrustHtml(body);
  }

}
