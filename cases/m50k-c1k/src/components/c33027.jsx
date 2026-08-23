import React from 'react';
const LABEL_33027 = 'component_33027';
export function Component33027({ value = 33027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33027, 'data-value': derived.doubled }, children);
}
export default Component33027;
