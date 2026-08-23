import React from 'react';
const LABEL_2526 = 'component_2526';
export function Component2526({ value = 2526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2526, 'data-value': derived.doubled }, children);
}
export default Component2526;
