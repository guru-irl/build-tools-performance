import React from 'react';
const LABEL_17467 = 'component_17467';
export function Component17467({ value = 17467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17467, 'data-value': derived.doubled }, children);
}
export default Component17467;
