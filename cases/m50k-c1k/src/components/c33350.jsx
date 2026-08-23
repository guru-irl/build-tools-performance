import React from 'react';
const LABEL_33350 = 'component_33350';
export function Component33350({ value = 33350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33350, 'data-value': derived.doubled }, children);
}
export default Component33350;
