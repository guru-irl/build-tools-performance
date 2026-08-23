import React from 'react';
const LABEL_32516 = 'component_32516';
export function Component32516({ value = 32516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32516, 'data-value': derived.doubled }, children);
}
export default Component32516;
