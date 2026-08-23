import React from 'react';
const LABEL_10315 = 'component_10315';
export function Component10315({ value = 10315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10315, 'data-value': derived.doubled }, children);
}
export default Component10315;
