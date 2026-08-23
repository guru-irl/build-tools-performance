import React from 'react';
const LABEL_33169 = 'component_33169';
export function Component33169({ value = 33169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33169, 'data-value': derived.doubled }, children);
}
export default Component33169;
