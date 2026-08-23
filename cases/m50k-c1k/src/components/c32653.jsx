import React from 'react';
const LABEL_32653 = 'component_32653';
export function Component32653({ value = 32653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32653, 'data-value': derived.doubled }, children);
}
export default Component32653;
