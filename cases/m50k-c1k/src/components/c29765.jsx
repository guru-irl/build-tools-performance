import React from 'react';
const LABEL_29765 = 'component_29765';
export function Component29765({ value = 29765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29765, 'data-value': derived.doubled }, children);
}
export default Component29765;
