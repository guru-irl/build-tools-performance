import React from 'react';
const LABEL_25495 = 'component_25495';
export function Component25495({ value = 25495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25495, 'data-value': derived.doubled }, children);
}
export default Component25495;
