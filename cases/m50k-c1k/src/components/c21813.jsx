import React from 'react';
const LABEL_21813 = 'component_21813';
export function Component21813({ value = 21813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21813, 'data-value': derived.doubled }, children);
}
export default Component21813;
