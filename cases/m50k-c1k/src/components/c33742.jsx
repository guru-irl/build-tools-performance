import React from 'react';
const LABEL_33742 = 'component_33742';
export function Component33742({ value = 33742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33742, 'data-value': derived.doubled }, children);
}
export default Component33742;
