import { useEffect } from 'react';
// 引入Orillusion实现3D效果
import {
  AtmosphericComponent,
  Camera3D,
  DirectLight,
  Engine3D,
  HoverCameraController,
  Object3D,
  Scene3D,
  View3D,
} from '@orillusion/core';
// Engine3D, // Engine3D 类为引擎主体，包含引擎初始化启动、运行渲染等核心方法
// Scene3D, // 通过新建 Scene3D 类可以创建一个场景实例，该场景实例在程序中通常作为根节点被使用
// Object3D, // Object3D 类定义了物体对象，该对象包含常用的物体属性如位置、旋转等参数
// Camera3D, // 通过新建 Camera3D 类可以创建一个摄像机3D组件的实例，该实例可以作为相机节点添加到场景中
// View3D, // View3D，指定引擎渲染的目标场景和观察相机
// LitMaterial, // 通过 LitMaterial 类可以创建材质实例，并通过设置材质参数实现不同的材质效果
// BoxGeometry, // 通过 BoxGeometry 类可以创建一个长方体几何体
// MeshRenderer, // MeshRenderer组件，为物体提供 mesh 对象几何渲染
// DirectLight, // 平行光组件，可以设置平行光组件的颜色、强度属性和光照角度来获得合适的光照效果
// HoverCameraController, // 盘旋相机组件，可以控制相机围绕观察点移动
// AtmosphericComponent, // 引擎内置的大气天空盒组件

interface IBdMapProps {}

const Orillusion: React.FC<IBdMapProps> = (props) => {
  const initialOrillusion = async () => {
    // const container = document.getElementById('cBox');
    // if (container?.innerHTML) {
    //   container.removeChild(container.children[0]);
    // }
    // const canvas = document.createElement('canvas');
    // canvas.width = 800;
    // canvas.width = 500;
    // container?.appendChild(canvas); // 将canvas追加到指定位置

    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    // 初始化引擎————注册挂载点
    await Engine3D.init({
      canvasConfig: { canvas },
    });

    // 一、模拟3D场景
    const scene3D = new Scene3D(); // 创建一个3D场景

    // 二、创建天空
    scene3D.addComponent(AtmosphericComponent); // 添加大气散射天空组件到3D场景

    // 三、创建相机：模拟人的观看视角
    const cameraObj = new Object3D(); // 新建摄像机实例
    const camera = cameraObj.addComponent(Camera3D);
    camera.perspective(70, window.innerWidth / window.innerHeight, 1, 5000.0); // 根据窗口大小设置摄像机视角
    const controller = camera.object3D.addComponent(HoverCameraController); // 设置相机控制器
    controller.setCamera(0, 80, 10);
    scene3D.addChild(cameraObj); // 添加相机节点到3D场景

    // 四、创建光源
    const light = new Object3D(); // 新建光源点：模拟太阳
    const component = light.addComponent(DirectLight); // 添加直接光组件：光照射的类型
    light.rotationX = 45; // 调整光照参数
    light.rotationY = 30; // 调整光照参数
    component.intensity = 2; // 调整光照参数
    scene3D.addChild(light); // 添加光照对象到3D模型中

    // 五、创建模型
    let source_gltf = await Engine3D.res.loadGltf('/home.gltf'); // 加载到外部模型的前提是你必须要注册好挂载点;

    scene3D.addChild(source_gltf); // 添加模型到3D场景

    // 六、渲染引擎、3D场景、相机
    const view = new View3D(); // 创建View3D对象
    view.scene = scene3D; // 指定渲染的场景
    view.camera = camera; // 指定使用的相机

    // 七、渲染开始
    Engine3D.startRenderView(view); // 数据渲染
  };

  useEffect(() => {
    initialOrillusion();
  }, []);

  return (
    <div
      id="cBox"
      style={{
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid #f00',
        height: 500,
      }}
    >
      <canvas id="canvas" style={{ width: 800, height: 500 }} />
    </div>
  );
};

export default Orillusion;
