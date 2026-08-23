import React from 'react';
const LABEL_21694 = 'component_21694';
export function Component21694({ value = 21694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21694, 'data-value': derived.doubled }, children);
}
export default Component21694;
