import React from 'react';
const LABEL_36311 = 'component_36311';
export function Component36311({ value = 36311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36311, 'data-value': derived.doubled }, children);
}
export default Component36311;
