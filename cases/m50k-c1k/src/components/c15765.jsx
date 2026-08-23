import React from 'react';
const LABEL_15765 = 'component_15765';
export function Component15765({ value = 15765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15765, 'data-value': derived.doubled }, children);
}
export default Component15765;
