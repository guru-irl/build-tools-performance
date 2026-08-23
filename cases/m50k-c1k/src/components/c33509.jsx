import React from 'react';
const LABEL_33509 = 'component_33509';
export function Component33509({ value = 33509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33509, 'data-value': derived.doubled }, children);
}
export default Component33509;
