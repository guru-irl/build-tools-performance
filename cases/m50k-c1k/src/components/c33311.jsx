import React from 'react';
const LABEL_33311 = 'component_33311';
export function Component33311({ value = 33311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33311, 'data-value': derived.doubled }, children);
}
export default Component33311;
