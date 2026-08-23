import React from 'react';
const LABEL_33658 = 'component_33658';
export function Component33658({ value = 33658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33658, 'data-value': derived.doubled }, children);
}
export default Component33658;
