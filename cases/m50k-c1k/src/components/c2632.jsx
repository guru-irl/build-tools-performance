import React from 'react';
const LABEL_2632 = 'component_2632';
export function Component2632({ value = 2632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2632, 'data-value': derived.doubled }, children);
}
export default Component2632;
