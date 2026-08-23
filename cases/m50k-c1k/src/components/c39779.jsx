import React from 'react';
const LABEL_39779 = 'component_39779';
export function Component39779({ value = 39779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39779, 'data-value': derived.doubled }, children);
}
export default Component39779;
