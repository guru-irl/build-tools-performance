import React from 'react';
const LABEL_2715 = 'component_2715';
export function Component2715({ value = 2715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2715, 'data-value': derived.doubled }, children);
}
export default Component2715;
