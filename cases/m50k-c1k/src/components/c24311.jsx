import React from 'react';
const LABEL_24311 = 'component_24311';
export function Component24311({ value = 24311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24311, 'data-value': derived.doubled }, children);
}
export default Component24311;
