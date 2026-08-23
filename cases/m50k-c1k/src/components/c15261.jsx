import React from 'react';
const LABEL_15261 = 'component_15261';
export function Component15261({ value = 15261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15261, 'data-value': derived.doubled }, children);
}
export default Component15261;
