import React from 'react';
const LABEL_39750 = 'component_39750';
export function Component39750({ value = 39750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39750, 'data-value': derived.doubled }, children);
}
export default Component39750;
