import React from 'react';
const LABEL_20779 = 'component_20779';
export function Component20779({ value = 20779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20779, 'data-value': derived.doubled }, children);
}
export default Component20779;
