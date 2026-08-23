import React from 'react';
const LABEL_46749 = 'component_46749';
export function Component46749({ value = 46749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46749, 'data-value': derived.doubled }, children);
}
export default Component46749;
