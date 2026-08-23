import React from 'react';
const LABEL_26311 = 'component_26311';
export function Component26311({ value = 26311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26311, 'data-value': derived.doubled }, children);
}
export default Component26311;
