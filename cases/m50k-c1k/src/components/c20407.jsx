import React from 'react';
const LABEL_20407 = 'component_20407';
export function Component20407({ value = 20407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20407, 'data-value': derived.doubled }, children);
}
export default Component20407;
