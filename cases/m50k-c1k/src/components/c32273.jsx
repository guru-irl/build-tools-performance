import React from 'react';
const LABEL_32273 = 'component_32273';
export function Component32273({ value = 32273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32273, 'data-value': derived.doubled }, children);
}
export default Component32273;
