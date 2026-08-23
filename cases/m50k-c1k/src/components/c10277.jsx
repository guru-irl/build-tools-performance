import React from 'react';
const LABEL_10277 = 'component_10277';
export function Component10277({ value = 10277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10277, 'data-value': derived.doubled }, children);
}
export default Component10277;
