import React from 'react';
const LABEL_45354 = 'component_45354';
export function Component45354({ value = 45354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45354, 'data-value': derived.doubled }, children);
}
export default Component45354;
