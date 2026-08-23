import React from 'react';
const LABEL_32715 = 'component_32715';
export function Component32715({ value = 32715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32715, 'data-value': derived.doubled }, children);
}
export default Component32715;
