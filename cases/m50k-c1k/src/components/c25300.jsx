import React from 'react';
const LABEL_25300 = 'component_25300';
export function Component25300({ value = 25300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25300, 'data-value': derived.doubled }, children);
}
export default Component25300;
