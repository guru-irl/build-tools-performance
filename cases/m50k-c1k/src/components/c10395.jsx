import React from 'react';
const LABEL_10395 = 'component_10395';
export function Component10395({ value = 10395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10395, 'data-value': derived.doubled }, children);
}
export default Component10395;
