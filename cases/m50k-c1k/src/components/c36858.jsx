import React from 'react';
const LABEL_36858 = 'component_36858';
export function Component36858({ value = 36858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36858, 'data-value': derived.doubled }, children);
}
export default Component36858;
