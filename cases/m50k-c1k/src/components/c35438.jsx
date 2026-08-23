import React from 'react';
const LABEL_35438 = 'component_35438';
export function Component35438({ value = 35438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35438, 'data-value': derived.doubled }, children);
}
export default Component35438;
