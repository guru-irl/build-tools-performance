import React from 'react';
const LABEL_23813 = 'component_23813';
export function Component23813({ value = 23813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23813, 'data-value': derived.doubled }, children);
}
export default Component23813;
