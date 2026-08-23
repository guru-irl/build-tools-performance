import React from 'react';
const LABEL_23749 = 'component_23749';
export function Component23749({ value = 23749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23749, 'data-value': derived.doubled }, children);
}
export default Component23749;
