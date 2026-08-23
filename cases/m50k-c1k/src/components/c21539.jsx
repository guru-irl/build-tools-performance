import React from 'react';
const LABEL_21539 = 'component_21539';
export function Component21539({ value = 21539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21539, 'data-value': derived.doubled }, children);
}
export default Component21539;
