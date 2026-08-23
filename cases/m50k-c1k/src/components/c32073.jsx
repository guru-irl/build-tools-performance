import React from 'react';
const LABEL_32073 = 'component_32073';
export function Component32073({ value = 32073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32073, 'data-value': derived.doubled }, children);
}
export default Component32073;
