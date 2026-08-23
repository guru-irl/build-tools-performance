import React from 'react';
const LABEL_15395 = 'component_15395';
export function Component15395({ value = 15395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15395, 'data-value': derived.doubled }, children);
}
export default Component15395;
