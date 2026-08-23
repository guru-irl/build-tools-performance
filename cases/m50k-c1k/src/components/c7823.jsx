import React from 'react';
const LABEL_7823 = 'component_7823';
export function Component7823({ value = 7823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7823, 'data-value': derived.doubled }, children);
}
export default Component7823;
