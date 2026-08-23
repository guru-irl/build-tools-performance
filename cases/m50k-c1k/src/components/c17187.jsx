import React from 'react';
const LABEL_17187 = 'component_17187';
export function Component17187({ value = 17187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17187, 'data-value': derived.doubled }, children);
}
export default Component17187;
