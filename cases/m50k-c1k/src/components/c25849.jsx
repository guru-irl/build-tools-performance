import React from 'react';
const LABEL_25849 = 'component_25849';
export function Component25849({ value = 25849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25849, 'data-value': derived.doubled }, children);
}
export default Component25849;
