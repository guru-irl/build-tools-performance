import React from 'react';
const LABEL_25552 = 'component_25552';
export function Component25552({ value = 25552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25552, 'data-value': derived.doubled }, children);
}
export default Component25552;
