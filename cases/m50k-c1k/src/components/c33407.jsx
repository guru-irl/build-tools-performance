import React from 'react';
const LABEL_33407 = 'component_33407';
export function Component33407({ value = 33407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33407, 'data-value': derived.doubled }, children);
}
export default Component33407;
