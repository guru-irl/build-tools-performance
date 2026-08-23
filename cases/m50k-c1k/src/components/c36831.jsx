import React from 'react';
const LABEL_36831 = 'component_36831';
export function Component36831({ value = 36831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36831, 'data-value': derived.doubled }, children);
}
export default Component36831;
