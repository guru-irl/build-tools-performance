import React from 'react';
const LABEL_9600 = 'component_9600';
export function Component9600({ value = 9600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9600, 'data-value': derived.doubled }, children);
}
export default Component9600;
