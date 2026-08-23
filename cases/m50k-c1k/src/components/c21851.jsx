import React from 'react';
const LABEL_21851 = 'component_21851';
export function Component21851({ value = 21851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21851, 'data-value': derived.doubled }, children);
}
export default Component21851;
