import React from 'react';
const LABEL_21281 = 'component_21281';
export function Component21281({ value = 21281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21281, 'data-value': derived.doubled }, children);
}
export default Component21281;
