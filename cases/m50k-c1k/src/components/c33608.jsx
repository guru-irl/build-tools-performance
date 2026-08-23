import React from 'react';
const LABEL_33608 = 'component_33608';
export function Component33608({ value = 33608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33608, 'data-value': derived.doubled }, children);
}
export default Component33608;
