import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss']
})
export class ShowroomComponent implements OnInit {

  @ViewChild('rendererContainer', { static: false }) rendererContainer: ElementRef;

  renderer = new THREE.WebGLRenderer();
  scene = null;
  camera = null;
  mesh = null;

  constructor() {
    this.scene = new THREE.Scene();
    // this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    // this.camera.position.z = 1000;

    this.camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 1, 20000);
    this.camera.position.set(2, 0, 2);

    // Load a Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: false });
    renderer.setClearColor(0xC5C5C3);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Load Light
    const ambientLight = new THREE.AmbientLight(0xcccccc);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0, 1, 1).normalize();
    this.scene.add(directionalLight);

    // const geometry = new THREE.BoxGeometry(200, 200, 200);
    // const material = new THREE.MeshBasicMaterial({color: '#37452f'});
    // this.mesh = new THREE.Mesh(geometry, material);

    // this.scene.add(this.mesh);

    const loader = new GLTFLoader();

    loader.load(
      'assets/wheel1.gltf',
      (gltf) => {
        gltf.scene.scale.set(2, 2, 2);
        gltf.scene.position.x = 0;				    //Position (x = right+ left-) 
        gltf.scene.position.y = 0;				    //Position (y = up+, down-)
        gltf.scene.position.z = 0;
        // called when the resource is loaded
        this.scene.add(gltf.scene);
        this.animate();
      },
      (xhr) => {
        // called while loading is progressing
        console.log(`${(xhr.loaded / xhr.total * 100)}% loaded`);
      },
      (error) => {
        // called when loading has errors
        console.error('An error happened', error);
      },
    );
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth / 1.3, window.innerHeight / 1.5);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    // this.animate();

    // Load the Orbitcontroller
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    // controls.target.set(0, 5, 0);
    // controls.update();
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.scene.rotation.x += 0.01;
    // this.mesh.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
  }

}
