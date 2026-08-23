import React from 'react';
const LABEL_40509 = 'component_40509';
export function Component40509({ value = 40509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40509, 'data-value': derived.doubled }, children);
}
export default Component40509;
