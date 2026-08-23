import React from 'react';
const LABEL_33831 = 'component_33831';
export function Component33831({ value = 33831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33831, 'data-value': derived.doubled }, children);
}
export default Component33831;
