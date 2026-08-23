import React from 'react';
const LABEL_33150 = 'component_33150';
export function Component33150({ value = 33150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33150, 'data-value': derived.doubled }, children);
}
export default Component33150;
