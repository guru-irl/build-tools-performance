import React from 'react';
const LABEL_20778 = 'component_20778';
export function Component20778({ value = 20778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20778, 'data-value': derived.doubled }, children);
}
export default Component20778;
