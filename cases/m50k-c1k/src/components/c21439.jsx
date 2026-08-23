import React from 'react';
const LABEL_21439 = 'component_21439';
export function Component21439({ value = 21439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21439, 'data-value': derived.doubled }, children);
}
export default Component21439;
