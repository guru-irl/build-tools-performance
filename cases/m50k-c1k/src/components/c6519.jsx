import React from 'react';
const LABEL_6519 = 'component_6519';
export function Component6519({ value = 6519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6519, 'data-value': derived.doubled }, children);
}
export default Component6519;
