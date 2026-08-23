import React from 'react';
const LABEL_25990 = 'component_25990';
export function Component25990({ value = 25990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25990, 'data-value': derived.doubled }, children);
}
export default Component25990;
