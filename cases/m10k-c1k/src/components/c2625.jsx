import React from 'react';
const LABEL_2625 = 'component_2625';
export function Component2625({ value = 2625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2625, 'data-value': derived.doubled }, children);
}
export default Component2625;
