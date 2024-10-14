import { Component, Renderer2 } from '@angular/core';
// import { MyKeycloakService } from './services/keycloak-service.service';

// import *  as jsMethod ;
// declare function calculate(x: number, y: number):number;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secure-angular-app';
  // constructor(private keycloakService: MyKeycloakService) { }
  constructor(private renderer: Renderer2) {
    console.log(calculate(100, 200));
  }
  
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }
  ngOnInit() {
    debugger;
 
    // this.keycloakService.init();
  }
}
  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = () => {
  //     const base64String = reader.result as string;
  //     this.uploadFile(base64String).subscribe({
  //       next: (res) => console.log('File uploaded successfully'),
  //       error: (err) => console.log('Upload failed', err)
  //     });
  //   };

  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // }

  // uploadFile(base64String: string) {
  //   const body = { file: base64String };
  //   return this.http.post('https://localhost:7115/api/uploadBase64', body);
  // }

