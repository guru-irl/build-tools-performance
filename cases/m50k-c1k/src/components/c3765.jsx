import React from 'react';
const LABEL_3765 = 'component_3765';
export function Component3765({ value = 3765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3765, 'data-value': derived.doubled }, children);
}
export default Component3765;
