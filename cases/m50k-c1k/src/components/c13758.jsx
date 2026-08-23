import React from 'react';
const LABEL_13758 = 'component_13758';
export function Component13758({ value = 13758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13758, 'data-value': derived.doubled }, children);
}
export default Component13758;
