import React from 'react';
const LABEL_5715 = 'component_5715';
export function Component5715({ value = 5715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5715, 'data-value': derived.doubled }, children);
}
export default Component5715;
