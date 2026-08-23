import React from 'react';
const LABEL_33034 = 'component_33034';
export function Component33034({ value = 33034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33034, 'data-value': derived.doubled }, children);
}
export default Component33034;
