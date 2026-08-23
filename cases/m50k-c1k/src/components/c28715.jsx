import React from 'react';
const LABEL_28715 = 'component_28715';
export function Component28715({ value = 28715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28715, 'data-value': derived.doubled }, children);
}
export default Component28715;
