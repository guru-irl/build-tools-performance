import React from 'react';
const LABEL_34779 = 'component_34779';
export function Component34779({ value = 34779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34779, 'data-value': derived.doubled }, children);
}
export default Component34779;
