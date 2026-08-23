import React from 'react';
const LABEL_36642 = 'component_36642';
export function Component36642({ value = 36642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36642, 'data-value': derived.doubled }, children);
}
export default Component36642;
