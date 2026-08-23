import React from 'react';
const LABEL_34379 = 'component_34379';
export function Component34379({ value = 34379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34379, 'data-value': derived.doubled }, children);
}
export default Component34379;
