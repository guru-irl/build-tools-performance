import React from 'react';
const LABEL_25369 = 'component_25369';
export function Component25369({ value = 25369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25369, 'data-value': derived.doubled }, children);
}
export default Component25369;
