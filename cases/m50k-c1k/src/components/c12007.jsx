import React from 'react';
const LABEL_12007 = 'component_12007';
export function Component12007({ value = 12007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12007, 'data-value': derived.doubled }, children);
}
export default Component12007;
