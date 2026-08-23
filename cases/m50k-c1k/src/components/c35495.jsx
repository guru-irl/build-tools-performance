import React from 'react';
const LABEL_35495 = 'component_35495';
export function Component35495({ value = 35495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35495, 'data-value': derived.doubled }, children);
}
export default Component35495;
