import React from 'react';
const LABEL_20439 = 'component_20439';
export function Component20439({ value = 20439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20439, 'data-value': derived.doubled }, children);
}
export default Component20439;
