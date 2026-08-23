import React from 'react';
const LABEL_36324 = 'component_36324';
export function Component36324({ value = 36324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36324, 'data-value': derived.doubled }, children);
}
export default Component36324;
