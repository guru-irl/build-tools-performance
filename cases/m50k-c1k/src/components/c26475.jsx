import React from 'react';
const LABEL_26475 = 'component_26475';
export function Component26475({ value = 26475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26475, 'data-value': derived.doubled }, children);
}
export default Component26475;
