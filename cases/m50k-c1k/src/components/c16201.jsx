import React from 'react';
const LABEL_16201 = 'component_16201';
export function Component16201({ value = 16201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16201, 'data-value': derived.doubled }, children);
}
export default Component16201;
