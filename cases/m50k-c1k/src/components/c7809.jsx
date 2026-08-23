import React from 'react';
const LABEL_7809 = 'component_7809';
export function Component7809({ value = 7809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7809, 'data-value': derived.doubled }, children);
}
export default Component7809;
