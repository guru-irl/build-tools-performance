import React from 'react';
const LABEL_2624 = 'component_2624';
export function Component2624({ value = 2624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2624, 'data-value': derived.doubled }, children);
}
export default Component2624;
