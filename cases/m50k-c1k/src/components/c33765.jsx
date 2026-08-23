import React from 'react';
const LABEL_33765 = 'component_33765';
export function Component33765({ value = 33765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33765, 'data-value': derived.doubled }, children);
}
export default Component33765;
