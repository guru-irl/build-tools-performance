import React from 'react';
const LABEL_9558 = 'component_9558';
export function Component9558({ value = 9558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9558, 'data-value': derived.doubled }, children);
}
export default Component9558;
