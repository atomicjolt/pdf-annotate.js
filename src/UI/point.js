import PDFJSAnnotate from '../PDFJSAnnotate';
import appendChild from '../render/appendChild';
import {
  BORDER_COLOR,
  findSVGAtPoint,
  getMetadata,
  scaleDown
} from './utils';
import {
  setEdit
} from './edit'

let _enabled = false;
let _pointColor;
let clientX;
let clientY;

/**
 * Handle document.mouseup event
 *
 * @param {Event} The DOM event to be handled
 */
function handleDocumentMouseup(e) {
  if (!findSVGAtPoint(e.clientX, e.clientY)) {
    return;
  }
  clientX = e.clientX;
  clientY = e.clientY;
  savePoint();
}

/**
 * Handle input.blur event
 */
function handleInputBlur() {
  savePoint();
}

/**
 * Handle input.keyup event
 *
 * @param {Event} e The DOM event to handle
 */
function handleInputKeyup(e) {
  if (e.keyCode === 13) {
    savePoint();
  }
}

/**
 * Save a new point annotation from input
 */
function savePoint() {
  let svg = findSVGAtPoint(clientX, clientY);
  if (!svg) {
    return;
  }

  let rect = svg.getBoundingClientRect();
  let { documentId, pageNumber } = getMetadata(svg);
  let annotation = Object.assign({
      type: 'point',
      color: _pointColor
    }, scaleDown(svg, {
      x: clientX - rect.left,
      y: clientY - rect.top
    })
  );

  PDFJSAnnotate.getStoreAdapter().addAnnotation(documentId, pageNumber, annotation)
    .then((annotation) => {
      appendChild(svg, annotation);
      PDFJSAnnotate.getStoreAdapter().getAnnotations(documentId, pageNumber)
        .then((annotations) => {
          setEdit(annotation)
        });
    });
}

/**
 * Change point color
 */
export function setPoint(pointColor = 'EE0512') {
  _pointColor = pointColor;
}

/**
 * Enable point annotation behavior
 */
export function enablePoint() {
  if (_enabled) { return; }

  _enabled = true;
  document.addEventListener('mouseup', handleDocumentMouseup);
}

/**
 * Disable point annotation behavior
 */
export function disablePoint() {
  if (!_enabled) { return; }

  _enabled = false;
  document.removeEventListener('mouseup', handleDocumentMouseup);
}
