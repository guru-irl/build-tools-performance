import React from 'react';
const LABEL_32228 = 'component_32228';
export function Component32228({ value = 32228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32228, 'data-value': derived.doubled }, children);
}
export default Component32228;
