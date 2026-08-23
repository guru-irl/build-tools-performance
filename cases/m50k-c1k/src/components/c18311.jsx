import React from 'react';
const LABEL_18311 = 'component_18311';
export function Component18311({ value = 18311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18311, 'data-value': derived.doubled }, children);
}
export default Component18311;
