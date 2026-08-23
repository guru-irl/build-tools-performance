import React from 'react';
const LABEL_17850 = 'component_17850';
export function Component17850({ value = 17850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17850, 'data-value': derived.doubled }, children);
}
export default Component17850;
