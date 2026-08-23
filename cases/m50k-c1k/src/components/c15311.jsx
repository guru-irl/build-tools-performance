import React from 'react';
const LABEL_15311 = 'component_15311';
export function Component15311({ value = 15311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15311, 'data-value': derived.doubled }, children);
}
export default Component15311;
