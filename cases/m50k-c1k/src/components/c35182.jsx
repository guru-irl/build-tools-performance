import React from 'react';
const LABEL_35182 = 'component_35182';
export function Component35182({ value = 35182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35182, 'data-value': derived.doubled }, children);
}
export default Component35182;
