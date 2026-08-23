import React from 'react';
const LABEL_22726 = 'component_22726';
export function Component22726({ value = 22726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22726, 'data-value': derived.doubled }, children);
}
export default Component22726;
