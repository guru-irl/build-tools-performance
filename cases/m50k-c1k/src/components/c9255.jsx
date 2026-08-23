import React from 'react';
const LABEL_9255 = 'component_9255';
export function Component9255({ value = 9255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9255, 'data-value': derived.doubled }, children);
}
export default Component9255;
