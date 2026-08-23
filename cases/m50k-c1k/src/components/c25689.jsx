import React from 'react';
const LABEL_25689 = 'component_25689';
export function Component25689({ value = 25689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25689, 'data-value': derived.doubled }, children);
}
export default Component25689;
