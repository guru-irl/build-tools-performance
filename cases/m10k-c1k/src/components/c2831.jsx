import React from 'react';
const LABEL_2831 = 'component_2831';
export function Component2831({ value = 2831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2831, 'data-value': derived.doubled }, children);
}
export default Component2831;
