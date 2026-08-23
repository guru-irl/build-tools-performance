import React from 'react';
const LABEL_31779 = 'component_31779';
export function Component31779({ value = 31779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31779, 'data-value': derived.doubled }, children);
}
export default Component31779;
