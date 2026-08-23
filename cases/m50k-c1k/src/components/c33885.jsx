import React from 'react';
const LABEL_33885 = 'component_33885';
export function Component33885({ value = 33885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33885, 'data-value': derived.doubled }, children);
}
export default Component33885;
