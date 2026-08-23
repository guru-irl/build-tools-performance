import React from 'react';
const LABEL_42859 = 'component_42859';
export function Component42859({ value = 42859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42859, 'data-value': derived.doubled }, children);
}
export default Component42859;
