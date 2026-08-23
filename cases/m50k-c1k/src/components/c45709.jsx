import React from 'react';
const LABEL_45709 = 'component_45709';
export function Component45709({ value = 45709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45709, 'data-value': derived.doubled }, children);
}
export default Component45709;
