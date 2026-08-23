import React from 'react';
const LABEL_1779 = 'component_1779';
export function Component1779({ value = 1779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1779, 'data-value': derived.doubled }, children);
}
export default Component1779;
