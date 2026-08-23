import React from 'react';
const LABEL_2695 = 'component_2695';
export function Component2695({ value = 2695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2695, 'data-value': derived.doubled }, children);
}
export default Component2695;
