import React from 'react';
const LABEL_23801 = 'component_23801';
export function Component23801({ value = 23801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23801, 'data-value': derived.doubled }, children);
}
export default Component23801;
