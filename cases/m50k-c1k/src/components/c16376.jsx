import React from 'react';
const LABEL_16376 = 'component_16376';
export function Component16376({ value = 16376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16376, 'data-value': derived.doubled }, children);
}
export default Component16376;
