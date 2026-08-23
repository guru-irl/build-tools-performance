import React from 'react';
const LABEL_9439 = 'component_9439';
export function Component9439({ value = 9439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9439, 'data-value': derived.doubled }, children);
}
export default Component9439;
