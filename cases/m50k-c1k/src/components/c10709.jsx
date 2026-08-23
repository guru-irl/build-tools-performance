import React from 'react';
const LABEL_10709 = 'component_10709';
export function Component10709({ value = 10709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10709, 'data-value': derived.doubled }, children);
}
export default Component10709;
