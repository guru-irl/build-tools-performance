import React from 'react';
const LABEL_28765 = 'component_28765';
export function Component28765({ value = 28765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28765, 'data-value': derived.doubled }, children);
}
export default Component28765;
