import React from 'react';
const LABEL_9074 = 'component_9074';
export function Component9074({ value = 9074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9074, 'data-value': derived.doubled }, children);
}
export default Component9074;
