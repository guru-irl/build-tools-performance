import React from 'react';
const LABEL_25109 = 'component_25109';
export function Component25109({ value = 25109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25109, 'data-value': derived.doubled }, children);
}
export default Component25109;
