import React from 'react';
const LABEL_21 = 'component_21';
export function Component21({ value = 21, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21, 'data-value': derived.doubled }, children);
}
export default Component21;
