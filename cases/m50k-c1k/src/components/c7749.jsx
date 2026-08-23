import React from 'react';
const LABEL_7749 = 'component_7749';
export function Component7749({ value = 7749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7749, 'data-value': derived.doubled }, children);
}
export default Component7749;
