import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'nx-angular-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'helloworld';

    constructor(private httpClient: HttpClient) { }

    ngOnInit() {
        this.httpClient.get('/api').subscribe((res: any) => { this.title = res.message });
    }
}
