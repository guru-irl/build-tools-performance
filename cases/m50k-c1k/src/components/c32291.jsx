import React from 'react';
const LABEL_32291 = 'component_32291';
export function Component32291({ value = 32291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32291, 'data-value': derived.doubled }, children);
}
export default Component32291;
