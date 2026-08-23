import React from 'react';
const LABEL_28311 = 'component_28311';
export function Component28311({ value = 28311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28311, 'data-value': derived.doubled }, children);
}
export default Component28311;
