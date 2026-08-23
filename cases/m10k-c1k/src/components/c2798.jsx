import React from 'react';
const LABEL_2798 = 'component_2798';
export function Component2798({ value = 2798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2798, 'data-value': derived.doubled }, children);
}
export default Component2798;
