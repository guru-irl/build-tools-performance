import React from 'react';
const LABEL_39604 = 'component_39604';
export function Component39604({ value = 39604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39604, 'data-value': derived.doubled }, children);
}
export default Component39604;
