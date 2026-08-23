import React from 'react';
const LABEL_21345 = 'component_21345';
export function Component21345({ value = 21345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21345, 'data-value': derived.doubled }, children);
}
export default Component21345;
