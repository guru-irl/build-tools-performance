import React from 'react';
const LABEL_2439 = 'component_2439';
export function Component2439({ value = 2439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2439, 'data-value': derived.doubled }, children);
}
export default Component2439;
