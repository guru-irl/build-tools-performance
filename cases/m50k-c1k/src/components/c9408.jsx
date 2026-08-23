import React from 'react';
const LABEL_9408 = 'component_9408';
export function Component9408({ value = 9408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9408, 'data-value': derived.doubled }, children);
}
export default Component9408;
