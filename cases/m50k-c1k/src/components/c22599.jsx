import React from 'react';
const LABEL_22599 = 'component_22599';
export function Component22599({ value = 22599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22599, 'data-value': derived.doubled }, children);
}
export default Component22599;
