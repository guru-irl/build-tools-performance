import React from 'react';
const LABEL_23779 = 'component_23779';
export function Component23779({ value = 23779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23779, 'data-value': derived.doubled }, children);
}
export default Component23779;
