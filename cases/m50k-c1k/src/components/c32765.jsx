import React from 'react';
const LABEL_32765 = 'component_32765';
export function Component32765({ value = 32765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32765, 'data-value': derived.doubled }, children);
}
export default Component32765;
