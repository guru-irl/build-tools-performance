import React from 'react';
const LABEL_2889 = 'component_2889';
export function Component2889({ value = 2889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2889, 'data-value': derived.doubled }, children);
}
export default Component2889;
