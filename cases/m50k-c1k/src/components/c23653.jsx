import React from 'react';
const LABEL_23653 = 'component_23653';
export function Component23653({ value = 23653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23653, 'data-value': derived.doubled }, children);
}
export default Component23653;
