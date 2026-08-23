import React from 'react';
const LABEL_45925 = 'component_45925';
export function Component45925({ value = 45925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45925, 'data-value': derived.doubled }, children);
}
export default Component45925;
