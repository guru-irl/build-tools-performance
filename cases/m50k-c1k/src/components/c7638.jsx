import React from 'react';
const LABEL_7638 = 'component_7638';
export function Component7638({ value = 7638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7638, 'data-value': derived.doubled }, children);
}
export default Component7638;
