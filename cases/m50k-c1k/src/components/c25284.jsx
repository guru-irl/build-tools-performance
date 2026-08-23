import React from 'react';
const LABEL_25284 = 'component_25284';
export function Component25284({ value = 25284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25284, 'data-value': derived.doubled }, children);
}
export default Component25284;
