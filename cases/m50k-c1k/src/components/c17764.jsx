import React from 'react';
const LABEL_17764 = 'component_17764';
export function Component17764({ value = 17764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17764, 'data-value': derived.doubled }, children);
}
export default Component17764;
