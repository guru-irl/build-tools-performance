import React from 'react';
const LABEL_17315 = 'component_17315';
export function Component17315({ value = 17315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17315, 'data-value': derived.doubled }, children);
}
export default Component17315;
