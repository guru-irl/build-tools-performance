import React from 'react';
const LABEL_12765 = 'component_12765';
export function Component12765({ value = 12765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12765, 'data-value': derived.doubled }, children);
}
export default Component12765;
