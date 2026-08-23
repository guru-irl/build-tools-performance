import React from 'react';
const LABEL_33127 = 'component_33127';
export function Component33127({ value = 33127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33127, 'data-value': derived.doubled }, children);
}
export default Component33127;
