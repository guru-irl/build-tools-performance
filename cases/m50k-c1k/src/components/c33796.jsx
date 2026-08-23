import React from 'react';
const LABEL_33796 = 'component_33796';
export function Component33796({ value = 33796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33796, 'data-value': derived.doubled }, children);
}
export default Component33796;
