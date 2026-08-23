import React from 'react';
const LABEL_15371 = 'component_15371';
export function Component15371({ value = 15371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15371, 'data-value': derived.doubled }, children);
}
export default Component15371;
