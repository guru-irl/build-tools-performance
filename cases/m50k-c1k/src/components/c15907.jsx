import React from 'react';
const LABEL_15907 = 'component_15907';
export function Component15907({ value = 15907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15907, 'data-value': derived.doubled }, children);
}
export default Component15907;
