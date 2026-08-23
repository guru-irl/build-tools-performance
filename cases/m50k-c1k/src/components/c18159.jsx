import React from 'react';
const LABEL_18159 = 'component_18159';
export function Component18159({ value = 18159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18159, 'data-value': derived.doubled }, children);
}
export default Component18159;
