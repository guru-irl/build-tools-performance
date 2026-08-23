import React from 'react';
const LABEL_33989 = 'component_33989';
export function Component33989({ value = 33989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33989, 'data-value': derived.doubled }, children);
}
export default Component33989;
