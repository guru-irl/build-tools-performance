import React from 'react';
const LABEL_17726 = 'component_17726';
export function Component17726({ value = 17726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17726, 'data-value': derived.doubled }, children);
}
export default Component17726;
