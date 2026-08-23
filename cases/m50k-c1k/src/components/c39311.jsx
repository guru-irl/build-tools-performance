import React from 'react';
const LABEL_39311 = 'component_39311';
export function Component39311({ value = 39311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39311, 'data-value': derived.doubled }, children);
}
export default Component39311;
