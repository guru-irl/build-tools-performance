import React from 'react';
const LABEL_16765 = 'component_16765';
export function Component16765({ value = 16765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16765, 'data-value': derived.doubled }, children);
}
export default Component16765;
