import React from 'react';
const LABEL_17375 = 'component_17375';
export function Component17375({ value = 17375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17375, 'data-value': derived.doubled }, children);
}
export default Component17375;
