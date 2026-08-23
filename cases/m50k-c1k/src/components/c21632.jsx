import React from 'react';
const LABEL_21632 = 'component_21632';
export function Component21632({ value = 21632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21632, 'data-value': derived.doubled }, children);
}
export default Component21632;
