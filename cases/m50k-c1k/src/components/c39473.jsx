import React from 'react';
const LABEL_39473 = 'component_39473';
export function Component39473({ value = 39473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39473, 'data-value': derived.doubled }, children);
}
export default Component39473;
