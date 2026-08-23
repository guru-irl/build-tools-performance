import React from 'react';
const LABEL_12376 = 'component_12376';
export function Component12376({ value = 12376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12376, 'data-value': derived.doubled }, children);
}
export default Component12376;
