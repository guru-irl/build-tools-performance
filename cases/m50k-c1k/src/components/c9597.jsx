import React from 'react';
const LABEL_9597 = 'component_9597';
export function Component9597({ value = 9597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9597, 'data-value': derived.doubled }, children);
}
export default Component9597;
