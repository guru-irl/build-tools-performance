import React from 'react';
const LABEL_12715 = 'component_12715';
export function Component12715({ value = 12715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12715, 'data-value': derived.doubled }, children);
}
export default Component12715;
