import React from 'react';
const LABEL_10779 = 'component_10779';
export function Component10779({ value = 10779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10779, 'data-value': derived.doubled }, children);
}
export default Component10779;
