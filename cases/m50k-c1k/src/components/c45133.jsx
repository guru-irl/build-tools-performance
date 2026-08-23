import React from 'react';
const LABEL_45133 = 'component_45133';
export function Component45133({ value = 45133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45133, 'data-value': derived.doubled }, children);
}
export default Component45133;
