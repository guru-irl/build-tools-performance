import React from 'react';
const LABEL_32521 = 'component_32521';
export function Component32521({ value = 32521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32521, 'data-value': derived.doubled }, children);
}
export default Component32521;
