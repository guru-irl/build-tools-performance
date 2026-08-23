import React from 'react';
const LABEL_33217 = 'component_33217';
export function Component33217({ value = 33217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33217, 'data-value': derived.doubled }, children);
}
export default Component33217;
