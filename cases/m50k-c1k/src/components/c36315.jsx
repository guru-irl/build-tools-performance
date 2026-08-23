import React from 'react';
const LABEL_36315 = 'component_36315';
export function Component36315({ value = 36315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36315, 'data-value': derived.doubled }, children);
}
export default Component36315;
