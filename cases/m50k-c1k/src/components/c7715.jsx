import React from 'react';
const LABEL_7715 = 'component_7715';
export function Component7715({ value = 7715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7715, 'data-value': derived.doubled }, children);
}
export default Component7715;
