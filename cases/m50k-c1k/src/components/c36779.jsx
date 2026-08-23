import React from 'react';
const LABEL_36779 = 'component_36779';
export function Component36779({ value = 36779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36779, 'data-value': derived.doubled }, children);
}
export default Component36779;
