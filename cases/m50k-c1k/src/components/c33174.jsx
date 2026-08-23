import React from 'react';
const LABEL_33174 = 'component_33174';
export function Component33174({ value = 33174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33174, 'data-value': derived.doubled }, children);
}
export default Component33174;
