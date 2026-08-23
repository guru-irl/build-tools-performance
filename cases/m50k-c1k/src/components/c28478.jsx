import React from 'react';
const LABEL_28478 = 'component_28478';
export function Component28478({ value = 28478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28478, 'data-value': derived.doubled }, children);
}
export default Component28478;
