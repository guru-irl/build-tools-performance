import React from 'react';
const LABEL_33315 = 'component_33315';
export function Component33315({ value = 33315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33315, 'data-value': derived.doubled }, children);
}
export default Component33315;
