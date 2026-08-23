import React from 'react';
const LABEL_32324 = 'component_32324';
export function Component32324({ value = 32324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32324, 'data-value': derived.doubled }, children);
}
export default Component32324;
