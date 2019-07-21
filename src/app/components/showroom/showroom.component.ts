import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss']
})
export class ShowroomComponent implements OnInit {

  @ViewChild('rendererContainer', {static: false}) rendererContainer: ElementRef;

  renderer = new THREE.WebGLRenderer();
  scene = null;
  camera = null;
  mesh = null;

  constructor() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1000;

    const geometry = new THREE.BoxGeometry(200, 200, 200);
    const material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
    this.mesh = new THREE.Mesh(geometry, material);

    this.scene.add(this.mesh);
   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth/1.3, window.innerHeight/1.5);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
}

animate() {
    window.requestAnimationFrame(() => this.animate());
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
}

}
