import React from 'react';
const LABEL_27439 = 'component_27439';
export function Component27439({ value = 27439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27439, 'data-value': derived.doubled }, children);
}
export default Component27439;
