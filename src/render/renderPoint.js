import setAttributes from '../utils/setAttributes';

const SIZE = 25;
const D = 'M16,9V4l1,0c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H7C6.45,2,6,2.45,6,3v0 c0,0.55,0.45,1,1,1l1,0v5c0,1.66-1.34,3-3,3h0v2h5.97v7l1,1l1-1v-7H19v-2h0C17.34,12,16,10.66,16,9z';

/**
 * Create SVGElement from an annotation definition.
 * This is used for anntations of type `comment`.
 *
 * @param {Object} a The annotation definition
 * @return {SVGElement} A svg to be rendered
 */
export default function renderPoint(a) {
  let outerSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

  setAttributes(outerSVG,  {
    width: SIZE,
    height: SIZE,
    x: a.x,
    y: a.y
  });

  setAttributes(rect, {
    width: SIZE,
    height: SIZE,
    fillOpacity: 0,
  });

  setAttributes(path, {
    d: D,
    width: parseInt(outerSVG.getAttribute('width')),
    height: parseInt(outerSVG.getAttribute('height')),
    fill: `#${a.color}`
  });

  outerSVG.appendChild(rect);
  outerSVG.appendChild(path);
  return outerSVG;
}
