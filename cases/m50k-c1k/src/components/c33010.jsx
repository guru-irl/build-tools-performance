import React from 'react';
const LABEL_33010 = 'component_33010';
export function Component33010({ value = 33010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33010, 'data-value': derived.doubled }, children);
}
export default Component33010;
