import React from 'react';
const LABEL_15495 = 'component_15495';
export function Component15495({ value = 15495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15495, 'data-value': derived.doubled }, children);
}
export default Component15495;
