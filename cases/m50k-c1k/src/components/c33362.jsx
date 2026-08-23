import React from 'react';
const LABEL_33362 = 'component_33362';
export function Component33362({ value = 33362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33362, 'data-value': derived.doubled }, children);
}
export default Component33362;
