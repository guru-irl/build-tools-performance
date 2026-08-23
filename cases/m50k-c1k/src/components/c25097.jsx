import React from 'react';
const LABEL_25097 = 'component_25097';
export function Component25097({ value = 25097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25097, 'data-value': derived.doubled }, children);
}
export default Component25097;
