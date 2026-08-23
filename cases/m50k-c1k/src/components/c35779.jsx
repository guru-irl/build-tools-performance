import React from 'react';
const LABEL_35779 = 'component_35779';
export function Component35779({ value = 35779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35779, 'data-value': derived.doubled }, children);
}
export default Component35779;
