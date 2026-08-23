import React from 'react';
const LABEL_33262 = 'component_33262';
export function Component33262({ value = 33262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33262, 'data-value': derived.doubled }, children);
}
export default Component33262;
