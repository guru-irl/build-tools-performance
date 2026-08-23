import React from 'react';
const LABEL_21765 = 'component_21765';
export function Component21765({ value = 21765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21765, 'data-value': derived.doubled }, children);
}
export default Component21765;
