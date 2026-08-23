import React from 'react';
const LABEL_6315 = 'component_6315';
export function Component6315({ value = 6315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6315, 'data-value': derived.doubled }, children);
}
export default Component6315;
