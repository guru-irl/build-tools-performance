import React from 'react';
const LABEL_17785 = 'component_17785';
export function Component17785({ value = 17785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17785, 'data-value': derived.doubled }, children);
}
export default Component17785;
