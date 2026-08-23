import React from 'react';
const LABEL_2159 = 'component_2159';
export function Component2159({ value = 2159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2159, 'data-value': derived.doubled }, children);
}
export default Component2159;
