import React from 'react';
const LABEL_32395 = 'component_32395';
export function Component32395({ value = 32395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32395, 'data-value': derived.doubled }, children);
}
export default Component32395;
