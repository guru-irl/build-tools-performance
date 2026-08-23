import React from 'react';
const LABEL_23315 = 'component_23315';
export function Component23315({ value = 23315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23315, 'data-value': derived.doubled }, children);
}
export default Component23315;
