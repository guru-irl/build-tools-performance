import React from 'react';
const LABEL_20252 = 'component_20252';
export function Component20252({ value = 20252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20252, 'data-value': derived.doubled }, children);
}
export default Component20252;
