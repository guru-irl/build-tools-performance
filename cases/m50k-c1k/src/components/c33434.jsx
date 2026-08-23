import React from 'react';
const LABEL_33434 = 'component_33434';
export function Component33434({ value = 33434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33434, 'data-value': derived.doubled }, children);
}
export default Component33434;
