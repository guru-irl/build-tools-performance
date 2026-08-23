import React from 'react';
const LABEL_6439 = 'component_6439';
export function Component6439({ value = 6439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6439, 'data-value': derived.doubled }, children);
}
export default Component6439;
