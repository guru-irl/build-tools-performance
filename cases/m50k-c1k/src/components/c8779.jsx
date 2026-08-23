import React from 'react';
const LABEL_8779 = 'component_8779';
export function Component8779({ value = 8779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8779, 'data-value': derived.doubled }, children);
}
export default Component8779;
