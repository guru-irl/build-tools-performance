import React from 'react';
const LABEL_25778 = 'component_25778';
export function Component25778({ value = 25778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25778, 'data-value': derived.doubled }, children);
}
export default Component25778;
