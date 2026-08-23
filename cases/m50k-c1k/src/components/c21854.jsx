import React from 'react';
const LABEL_21854 = 'component_21854';
export function Component21854({ value = 21854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21854, 'data-value': derived.doubled }, children);
}
export default Component21854;
