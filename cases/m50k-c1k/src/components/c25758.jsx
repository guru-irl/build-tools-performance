import React from 'react';
const LABEL_25758 = 'component_25758';
export function Component25758({ value = 25758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25758, 'data-value': derived.doubled }, children);
}
export default Component25758;
