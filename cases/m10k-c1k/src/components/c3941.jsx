import React from 'react';
const LABEL_3941 = 'component_3941';
export function Component3941({ value = 3941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3941, 'data-value': derived.doubled }, children);
}
export default Component3941;
