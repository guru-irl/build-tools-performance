import React from 'react';
const LABEL_22653 = 'component_22653';
export function Component22653({ value = 22653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22653, 'data-value': derived.doubled }, children);
}
export default Component22653;
