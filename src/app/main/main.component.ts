import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
   loginObj:any={
  "mail":""
   }
    APIURL="http://localhost:8000/";
    http=inject(HttpClient);
    onLogin(){
      debugger;
      let body=new FormData();
      body.append('mail',this.loginObj.mail);
      this.http.post("http://localhost:8000/get_email", body).subscribe((res: any) => {
        debugger;
        alert(res)
    })
    }
}
