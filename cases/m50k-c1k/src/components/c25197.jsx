import React from 'react';
const LABEL_25197 = 'component_25197';
export function Component25197({ value = 25197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25197, 'data-value': derived.doubled }, children);
}
export default Component25197;
