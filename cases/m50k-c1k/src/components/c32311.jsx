import React from 'react';
const LABEL_32311 = 'component_32311';
export function Component32311({ value = 32311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32311, 'data-value': derived.doubled }, children);
}
export default Component32311;
