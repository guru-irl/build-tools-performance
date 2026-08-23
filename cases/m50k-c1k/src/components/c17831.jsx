import React from 'react';
const LABEL_17831 = 'component_17831';
export function Component17831({ value = 17831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17831, 'data-value': derived.doubled }, children);
}
export default Component17831;
