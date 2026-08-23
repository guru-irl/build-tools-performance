import React from 'react';
const LABEL_25104 = 'component_25104';
export function Component25104({ value = 25104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25104, 'data-value': derived.doubled }, children);
}
export default Component25104;
