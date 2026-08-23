import React from 'react';
const LABEL_3831 = 'component_3831';
export function Component3831({ value = 3831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3831, 'data-value': derived.doubled }, children);
}
export default Component3831;
