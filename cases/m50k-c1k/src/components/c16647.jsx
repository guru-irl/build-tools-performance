import React from 'react';
const LABEL_16647 = 'component_16647';
export function Component16647({ value = 16647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16647, 'data-value': derived.doubled }, children);
}
export default Component16647;
