import React from 'react';
const LABEL_5439 = 'component_5439';
export function Component5439({ value = 5439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5439, 'data-value': derived.doubled }, children);
}
export default Component5439;
