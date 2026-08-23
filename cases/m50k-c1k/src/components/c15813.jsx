import React from 'react';
const LABEL_15813 = 'component_15813';
export function Component15813({ value = 15813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15813, 'data-value': derived.doubled }, children);
}
export default Component15813;
