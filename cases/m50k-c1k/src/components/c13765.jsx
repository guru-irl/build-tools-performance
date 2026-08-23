import React from 'react';
const LABEL_13765 = 'component_13765';
export function Component13765({ value = 13765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13765, 'data-value': derived.doubled }, children);
}
export default Component13765;
