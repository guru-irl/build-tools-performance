import React from 'react';
const LABEL_36617 = 'component_36617';
export function Component36617({ value = 36617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36617, 'data-value': derived.doubled }, children);
}
export default Component36617;
