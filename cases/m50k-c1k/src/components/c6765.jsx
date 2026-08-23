import React from 'react';
const LABEL_6765 = 'component_6765';
export function Component6765({ value = 6765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6765, 'data-value': derived.doubled }, children);
}
export default Component6765;
