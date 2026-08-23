import React from 'react';
const LABEL_17001 = 'component_17001';
export function Component17001({ value = 17001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17001, 'data-value': derived.doubled }, children);
}
export default Component17001;
