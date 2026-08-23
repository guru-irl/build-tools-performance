import React from 'react';
const LABEL_28750 = 'component_28750';
export function Component28750({ value = 28750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28750, 'data-value': derived.doubled }, children);
}
export default Component28750;
