import React from 'react';
const LABEL_2674 = 'component_2674';
export function Component2674({ value = 2674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2674, 'data-value': derived.doubled }, children);
}
export default Component2674;
