import React from 'react';
const LABEL_37750 = 'component_37750';
export function Component37750({ value = 37750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37750, 'data-value': derived.doubled }, children);
}
export default Component37750;
