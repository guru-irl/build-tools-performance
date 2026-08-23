import React from 'react';
const LABEL_39765 = 'component_39765';
export function Component39765({ value = 39765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39765, 'data-value': derived.doubled }, children);
}
export default Component39765;
