import React from 'react';
const LABEL_15234 = 'component_15234';
export function Component15234({ value = 15234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15234, 'data-value': derived.doubled }, children);
}
export default Component15234;
