import React from 'react';
const LABEL_45193 = 'component_45193';
export function Component45193({ value = 45193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45193, 'data-value': derived.doubled }, children);
}
export default Component45193;
