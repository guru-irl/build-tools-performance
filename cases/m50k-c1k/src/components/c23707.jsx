import React from 'react';
const LABEL_23707 = 'component_23707';
export function Component23707({ value = 23707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23707, 'data-value': derived.doubled }, children);
}
export default Component23707;
