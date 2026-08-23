import React from 'react';
const LABEL_45396 = 'component_45396';
export function Component45396({ value = 45396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45396, 'data-value': derived.doubled }, children);
}
export default Component45396;
