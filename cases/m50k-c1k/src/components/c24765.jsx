import React from 'react';
const LABEL_24765 = 'component_24765';
export function Component24765({ value = 24765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24765, 'data-value': derived.doubled }, children);
}
export default Component24765;
