import '@umijs/max/typings';
declare module 'slash2';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module 'omit.js';
declare module 'numeral';
declare module '@antv/data-set';
declare module 'mockjs';
declare module 'react-fittext';
declare module 'bizcharts-plugin-slider';

// 添加全局变量
declare let L: any; // 解决全局飘红变量问题
declare let BMap: {
  TileLayer: new (string?: any, option?: any) => any;
};

declare let AMap: {
  Map: new (ele: string | HTMLElement, option?: any) => void;
  GeoJSON: new (option?: any) => void;
  Polygon: new (option: any) => {
    getPath: () => any;
  };
  Autocomplete: new (option: any) => void;
  PlaceSearch: new (option: any) => any;
  AutoComplete: new (option: any) => void;
  DistrictSearch: new (option?: any) => {
    search: (str: string, callback: any) => void;
  };
  Marker: new (option?: any) => void;
  Polyline: new (option?: any) => void;
  InfoWindow: new (option: any) => void;
  Pixel: new (num1: any, num2: any) => void;
  Object3DLayer: new (option?: any) => any;
  Icon: new (option?: any) => any;
  Size: new (num1: any, num2: any) => void;
  PolyEditor: new (dom: any, option?: any) => {
    on: (type: string, callback: (e: any) => void) => void;
  };
  service: (str: string, callback?: any) => any;
  plugin: (arr: any[], fn: any) => void;
  GeometryUtil: {
    ringArea: (num: number) => number;
  };
  event: {
    addListener: (param: any, classes: string, str: any) => any;
  };
  TileLayer: {
    RoadNet: new (option?: any) => void;
    Satellite: new (option?: any) => void;
  };
  Object3D: {
    Wall: new (option: any) => any;
  };
};

declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false;
