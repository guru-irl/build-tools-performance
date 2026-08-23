import React from 'react';
const LABEL_35715 = 'component_35715';
export function Component35715({ value = 35715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35715, 'data-value': derived.doubled }, children);
}
export default Component35715;
