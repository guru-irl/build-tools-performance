import React from 'react';
const LABEL_22178 = 'component_22178';
export function Component22178({ value = 22178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22178, 'data-value': derived.doubled }, children);
}
export default Component22178;
