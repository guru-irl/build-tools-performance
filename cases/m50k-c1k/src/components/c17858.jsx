import React from 'react';
const LABEL_17858 = 'component_17858';
export function Component17858({ value = 17858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17858, 'data-value': derived.doubled }, children);
}
export default Component17858;
