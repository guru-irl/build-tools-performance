import React from 'react';
const LABEL_21989 = 'component_21989';
export function Component21989({ value = 21989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21989, 'data-value': derived.doubled }, children);
}
export default Component21989;
