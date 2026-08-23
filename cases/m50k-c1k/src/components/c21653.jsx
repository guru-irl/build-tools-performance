import React from 'react';
const LABEL_21653 = 'component_21653';
export function Component21653({ value = 21653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21653, 'data-value': derived.doubled }, children);
}
export default Component21653;
