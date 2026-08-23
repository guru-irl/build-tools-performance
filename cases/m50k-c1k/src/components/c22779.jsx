import React from 'react';
const LABEL_22779 = 'component_22779';
export function Component22779({ value = 22779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22779, 'data-value': derived.doubled }, children);
}
export default Component22779;
