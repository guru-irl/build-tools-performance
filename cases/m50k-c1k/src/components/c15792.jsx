import React from 'react';
const LABEL_15792 = 'component_15792';
export function Component15792({ value = 15792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15792, 'data-value': derived.doubled }, children);
}
export default Component15792;
