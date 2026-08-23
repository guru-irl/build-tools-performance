import React from 'react';
const LABEL_2779 = 'component_2779';
export function Component2779({ value = 2779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2779, 'data-value': derived.doubled }, children);
}
export default Component2779;
