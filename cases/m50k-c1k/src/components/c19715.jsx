import React from 'react';
const LABEL_19715 = 'component_19715';
export function Component19715({ value = 19715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19715, 'data-value': derived.doubled }, children);
}
export default Component19715;
