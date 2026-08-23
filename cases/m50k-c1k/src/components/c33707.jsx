import React from 'react';
const LABEL_33707 = 'component_33707';
export function Component33707({ value = 33707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33707, 'data-value': derived.doubled }, children);
}
export default Component33707;
