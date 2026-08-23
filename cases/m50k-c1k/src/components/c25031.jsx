import React from 'react';
const LABEL_25031 = 'component_25031';
export function Component25031({ value = 25031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25031, 'data-value': derived.doubled }, children);
}
export default Component25031;
