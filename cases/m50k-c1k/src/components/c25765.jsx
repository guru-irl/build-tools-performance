import React from 'react';
const LABEL_25765 = 'component_25765';
export function Component25765({ value = 25765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25765, 'data-value': derived.doubled }, children);
}
export default Component25765;
