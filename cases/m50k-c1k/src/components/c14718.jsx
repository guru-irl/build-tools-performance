import React from 'react';
const LABEL_14718 = 'component_14718';
export function Component14718({ value = 14718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14718, 'data-value': derived.doubled }, children);
}
export default Component14718;
