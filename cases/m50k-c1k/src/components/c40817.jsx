import React from 'react';
const LABEL_40817 = 'component_40817';
export function Component40817({ value = 40817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40817, 'data-value': derived.doubled }, children);
}
export default Component40817;
