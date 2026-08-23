import React from 'react';
const LABEL_25252 = 'component_25252';
export function Component25252({ value = 25252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25252, 'data-value': derived.doubled }, children);
}
export default Component25252;
