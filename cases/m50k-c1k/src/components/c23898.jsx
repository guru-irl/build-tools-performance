import React from 'react';
const LABEL_23898 = 'component_23898';
export function Component23898({ value = 23898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23898, 'data-value': derived.doubled }, children);
}
export default Component23898;
