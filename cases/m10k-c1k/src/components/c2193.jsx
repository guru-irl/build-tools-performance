import React from 'react';
const LABEL_2193 = 'component_2193';
export function Component2193({ value = 2193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2193, 'data-value': derived.doubled }, children);
}
export default Component2193;
