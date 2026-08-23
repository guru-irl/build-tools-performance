import React from 'react';
const LABEL_28395 = 'component_28395';
export function Component28395({ value = 28395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28395, 'data-value': derived.doubled }, children);
}
export default Component28395;
