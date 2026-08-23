import React from 'react';
const LABEL_831 = 'component_831';
export function Component831({ value = 831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_831, 'data-value': derived.doubled }, children);
}
export default Component831;
