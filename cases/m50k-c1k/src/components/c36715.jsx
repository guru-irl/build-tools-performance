import React from 'react';
const LABEL_36715 = 'component_36715';
export function Component36715({ value = 36715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36715, 'data-value': derived.doubled }, children);
}
export default Component36715;
