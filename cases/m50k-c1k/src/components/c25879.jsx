import React from 'react';
const LABEL_25879 = 'component_25879';
export function Component25879({ value = 25879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25879, 'data-value': derived.doubled }, children);
}
export default Component25879;
