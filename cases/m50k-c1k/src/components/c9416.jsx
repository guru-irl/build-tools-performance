import React from 'react';
const LABEL_9416 = 'component_9416';
export function Component9416({ value = 9416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9416, 'data-value': derived.doubled }, children);
}
export default Component9416;
