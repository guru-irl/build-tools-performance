import React from 'react';
const LABEL_25715 = 'component_25715';
export function Component25715({ value = 25715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25715, 'data-value': derived.doubled }, children);
}
export default Component25715;
