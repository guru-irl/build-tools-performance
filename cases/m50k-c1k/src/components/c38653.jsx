import React from 'react';
const LABEL_38653 = 'component_38653';
export function Component38653({ value = 38653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38653, 'data-value': derived.doubled }, children);
}
export default Component38653;
