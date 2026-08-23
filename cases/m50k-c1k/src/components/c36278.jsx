import React from 'react';
const LABEL_36278 = 'component_36278';
export function Component36278({ value = 36278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36278, 'data-value': derived.doubled }, children);
}
export default Component36278;
