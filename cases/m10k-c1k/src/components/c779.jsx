import React from 'react';
const LABEL_779 = 'component_779';
export function Component779({ value = 779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_779, 'data-value': derived.doubled }, children);
}
export default Component779;
