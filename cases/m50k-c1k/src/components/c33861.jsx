import React from 'react';
const LABEL_33861 = 'component_33861';
export function Component33861({ value = 33861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33861, 'data-value': derived.doubled }, children);
}
export default Component33861;
