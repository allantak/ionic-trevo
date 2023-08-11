import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { ApiService } from 'src/app/services/api.service';
import { ICall } from 'src/app/types/call';
import { Geolocation } from '@capacitor/geolocation';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss'],
})
export class RegistryComponent implements OnInit {
  id?: number;
  title?: string;
  priority: string = "";
  img?: string;
  latitude?: number;
  longitude?: number;
  selectedImage: string | ArrayBuffer = "../../../assets/placeholder.png";
  update: boolean = false;

  constructor(private apiService: ApiService,
     private router: Router,
      private routerParameter: ActivatedRoute, private modalController: ModalController) {
  }

  ngOnInit() {
    let paramCategory = this.routerParameter.snapshot.paramMap;

    if (paramCategory.get("title")) {
      this.id = parseInt( paramCategory.get("id") ?? "")
      this.title = paramCategory.get("title") ?? "";
      this.priority = paramCategory.get("priority") ?? "";

      const latitudeString = paramCategory.get("lat");
      const longitudeString = paramCategory.get("lot")

      if (latitudeString !== null && longitudeString !== null) {
        this.longitude = parseFloat(longitudeString);
        this.latitude = parseFloat(latitudeString);
      } else {
        this.latitude = undefined;
        this.longitude = undefined;
      }
      this.img = paramCategory.get("imgUrl") ?? "";
      this.selectedImage =  paramCategory.get("imgUrl") ?? "";
      this.update = true;
    } else {
      this.printCurrentPosition()
    }



  }

  onImageSelected(imageUrl: string): void {
    if (imageUrl) {
      console.log(imageUrl)
      this.selectedImage = imageUrl;
      this.img = imageUrl;
    }
  }

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.DataUrl,
      });
      const imageUrl: any = image.dataUrl;

      this.onImageSelected(imageUrl);

    } catch (error) {
      console.error('Error taking picture:', error);
    }
  }

  async onSubmit() {
    const data: ICall = {
      title: this.title,
      priority: this.priority,
      imgUrl: this.selectedImage,
      lat: this.latitude,
      lot: this.longitude
    }
    if( !this.update){
      await this.apiService.add(data).subscribe(
        {
          next: () => {
            this.title = "";
            this.priority = "";
            this.img = "";
            this.router.navigateByUrl('/home');
          }
        });
    }else {
      if(this.id !== undefined){
        await this.apiService.update(this.id, data).subscribe(
          {
            next: () => {
              this.title = "";
              this.priority = "";
              this.img = "";
              this.router.navigateByUrl('/home');
            }
          });
      }

    }

  }

  async printCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
  };

  getValueModal(value: string){
    this.priority= value;
    this.modalController.dismiss();
  }

}
