import React from 'react';
const LABEL_33488 = 'component_33488';
export function Component33488({ value = 33488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33488, 'data-value': derived.doubled }, children);
}
export default Component33488;
