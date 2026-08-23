import React from 'react';
const LABEL_36972 = 'component_36972';
export function Component36972({ value = 36972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36972, 'data-value': derived.doubled }, children);
}
export default Component36972;
