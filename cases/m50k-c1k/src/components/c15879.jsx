import React from 'react';
const LABEL_15879 = 'component_15879';
export function Component15879({ value = 15879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15879, 'data-value': derived.doubled }, children);
}
export default Component15879;
