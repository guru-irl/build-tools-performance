import React from 'react';
const LABEL_11439 = 'component_11439';
export function Component11439({ value = 11439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11439, 'data-value': derived.doubled }, children);
}
export default Component11439;
