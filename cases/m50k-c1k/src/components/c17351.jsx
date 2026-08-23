import React from 'react';
const LABEL_17351 = 'component_17351';
export function Component17351({ value = 17351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17351, 'data-value': derived.doubled }, children);
}
export default Component17351;
