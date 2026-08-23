import React from 'react';
const LABEL_3439 = 'component_3439';
export function Component3439({ value = 3439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3439, 'data-value': derived.doubled }, children);
}
export default Component3439;
