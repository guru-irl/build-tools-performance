import React from 'react';
const LABEL_24395 = 'component_24395';
export function Component24395({ value = 24395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24395, 'data-value': derived.doubled }, children);
}
export default Component24395;
