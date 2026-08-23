import React from 'react';
const LABEL_20623 = 'component_20623';
export function Component20623({ value = 20623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20623, 'data-value': derived.doubled }, children);
}
export default Component20623;
