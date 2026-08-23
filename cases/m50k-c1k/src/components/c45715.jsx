import React from 'react';
const LABEL_45715 = 'component_45715';
export function Component45715({ value = 45715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45715, 'data-value': derived.doubled }, children);
}
export default Component45715;
