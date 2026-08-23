import React from 'react';
const LABEL_22831 = 'component_22831';
export function Component22831({ value = 22831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22831, 'data-value': derived.doubled }, children);
}
export default Component22831;
