import React from 'react';
const LABEL_17439 = 'component_17439';
export function Component17439({ value = 17439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17439, 'data-value': derived.doubled }, children);
}
export default Component17439;
