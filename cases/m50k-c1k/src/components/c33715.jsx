import React from 'react';
const LABEL_33715 = 'component_33715';
export function Component33715({ value = 33715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33715, 'data-value': derived.doubled }, children);
}
export default Component33715;
