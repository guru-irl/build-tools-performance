import React from 'react';
const LABEL_12315 = 'component_12315';
export function Component12315({ value = 12315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12315, 'data-value': derived.doubled }, children);
}
export default Component12315;
