import { addEventListener, removeEventListener, fireEvent } from './event';
import { disableEdit, enableEdit, setEdit } from './edit';
import { disablePen, enablePen, setPen } from './pen';
import { disablePoint, enablePoint, setPoint } from './point';
import { disableRect, enableRect, setHighlight, setStrikeout, setArea } from './rect';
import { disableText, enableText, setText } from './text';
import { createPage, renderPage } from './page';

export default {
  addEventListener, removeEventListener, fireEvent,
  disableEdit, enableEdit, setEdit,
  disablePen, enablePen, setPen,
  disablePoint, enablePoint, setPoint,
  disableRect, enableRect, setHighlight, setStrikeout, setArea,
  disableText, enableText, setText,
  createPage, renderPage
};
