import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ICall } from 'src/app/types/call';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss'],
})
export class RegistryComponent  implements OnInit {

  title?: string;
  priority?: string;
  img?: string;
  latitude?: string;
  longitude?: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  selectedImage: string | ArrayBuffer = "https://docs-demo.ionic.io/assets/madison.jpg";

  openImagePicker(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.addEventListener('change', (event: any) => this.onImageSelected(event));
    input.click();
  }

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    const data: ICall = {
      title: "123123123",
      priority: "324234234",
      imgUrl: "123123123"
    }
    this.apiService.add(data).subscribe(data => { console.log(data)});
  }

}
