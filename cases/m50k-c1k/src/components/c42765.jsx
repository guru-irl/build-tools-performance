import React from 'react';
const LABEL_42765 = 'component_42765';
export function Component42765({ value = 42765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42765, 'data-value': derived.doubled }, children);
}
export default Component42765;
