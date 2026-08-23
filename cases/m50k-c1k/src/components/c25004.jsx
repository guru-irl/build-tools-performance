import React from 'react';
const LABEL_25004 = 'component_25004';
export function Component25004({ value = 25004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25004, 'data-value': derived.doubled }, children);
}
export default Component25004;
