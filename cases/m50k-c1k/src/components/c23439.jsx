import React from 'react';
const LABEL_23439 = 'component_23439';
export function Component23439({ value = 23439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23439, 'data-value': derived.doubled }, children);
}
export default Component23439;
