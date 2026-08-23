import React from 'react';
const LABEL_11779 = 'component_11779';
export function Component11779({ value = 11779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11779, 'data-value': derived.doubled }, children);
}
export default Component11779;
