import React from 'react';
const LABEL_25650 = 'component_25650';
export function Component25650({ value = 25650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25650, 'data-value': derived.doubled }, children);
}
export default Component25650;
