import React from 'react';
const LABEL_26053 = 'component_26053';
export function Component26053({ value = 26053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26053, 'data-value': derived.doubled }, children);
}
export default Component26053;
