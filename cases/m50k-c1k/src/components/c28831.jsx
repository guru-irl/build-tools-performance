import React from 'react';
const LABEL_28831 = 'component_28831';
export function Component28831({ value = 28831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28831, 'data-value': derived.doubled }, children);
}
export default Component28831;
