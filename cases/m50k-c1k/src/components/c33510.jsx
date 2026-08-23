import React from 'react';
const LABEL_33510 = 'component_33510';
export function Component33510({ value = 33510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33510, 'data-value': derived.doubled }, children);
}
export default Component33510;
