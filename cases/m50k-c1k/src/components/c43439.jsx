import React from 'react';
const LABEL_43439 = 'component_43439';
export function Component43439({ value = 43439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43439, 'data-value': derived.doubled }, children);
}
export default Component43439;
