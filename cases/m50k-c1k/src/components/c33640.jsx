import React from 'react';
const LABEL_33640 = 'component_33640';
export function Component33640({ value = 33640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33640, 'data-value': derived.doubled }, children);
}
export default Component33640;
