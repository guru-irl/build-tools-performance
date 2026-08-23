import React from 'react';
const LABEL_36778 = 'component_36778';
export function Component36778({ value = 36778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36778, 'data-value': derived.doubled }, children);
}
export default Component36778;
