import React from 'react';
const LABEL_6715 = 'component_6715';
export function Component6715({ value = 6715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6715, 'data-value': derived.doubled }, children);
}
export default Component6715;
