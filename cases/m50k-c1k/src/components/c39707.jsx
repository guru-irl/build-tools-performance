import React from 'react';
const LABEL_39707 = 'component_39707';
export function Component39707({ value = 39707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39707, 'data-value': derived.doubled }, children);
}
export default Component39707;
