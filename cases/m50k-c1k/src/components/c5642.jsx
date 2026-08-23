import React from 'react';
const LABEL_5642 = 'component_5642';
export function Component5642({ value = 5642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5642, 'data-value': derived.doubled }, children);
}
export default Component5642;
