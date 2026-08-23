import React from 'react';
const LABEL_21178 = 'component_21178';
export function Component21178({ value = 21178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21178, 'data-value': derived.doubled }, children);
}
export default Component21178;
