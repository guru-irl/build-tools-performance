import React from 'react';
const LABEL_23376 = 'component_23376';
export function Component23376({ value = 23376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23376, 'data-value': derived.doubled }, children);
}
export default Component23376;
