import React from 'react';
const LABEL_21311 = 'component_21311';
export function Component21311({ value = 21311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21311, 'data-value': derived.doubled }, children);
}
export default Component21311;
