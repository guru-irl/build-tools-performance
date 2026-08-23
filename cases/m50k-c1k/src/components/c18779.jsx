import React from 'react';
const LABEL_18779 = 'component_18779';
export function Component18779({ value = 18779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18779, 'data-value': derived.doubled }, children);
}
export default Component18779;
