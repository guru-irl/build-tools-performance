import React from 'react';
const LABEL_32193 = 'component_32193';
export function Component32193({ value = 32193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32193, 'data-value': derived.doubled }, children);
}
export default Component32193;
