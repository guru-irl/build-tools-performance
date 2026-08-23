import React from 'react';
const LABEL_23796 = 'component_23796';
export function Component23796({ value = 23796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23796, 'data-value': derived.doubled }, children);
}
export default Component23796;
