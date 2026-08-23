import React from 'react';
const LABEL_23517 = 'component_23517';
export function Component23517({ value = 23517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23517, 'data-value': derived.doubled }, children);
}
export default Component23517;
