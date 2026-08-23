import React from 'react';
const LABEL_33330 = 'component_33330';
export function Component33330({ value = 33330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33330, 'data-value': derived.doubled }, children);
}
export default Component33330;
