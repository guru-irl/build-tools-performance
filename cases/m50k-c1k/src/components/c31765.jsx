import React from 'react';
const LABEL_31765 = 'component_31765';
export function Component31765({ value = 31765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31765, 'data-value': derived.doubled }, children);
}
export default Component31765;
