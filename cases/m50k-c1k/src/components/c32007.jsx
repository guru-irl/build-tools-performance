import React from 'react';
const LABEL_32007 = 'component_32007';
export function Component32007({ value = 32007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32007, 'data-value': derived.doubled }, children);
}
export default Component32007;
