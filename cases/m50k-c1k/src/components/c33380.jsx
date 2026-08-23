import React from 'react';
const LABEL_33380 = 'component_33380';
export function Component33380({ value = 33380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33380, 'data-value': derived.doubled }, children);
}
export default Component33380;
