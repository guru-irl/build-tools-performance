import React from 'react';
const LABEL_23168 = 'component_23168';
export function Component23168({ value = 23168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23168, 'data-value': derived.doubled }, children);
}
export default Component23168;
