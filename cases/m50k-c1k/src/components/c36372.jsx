import React from 'react';
const LABEL_36372 = 'component_36372';
export function Component36372({ value = 36372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36372, 'data-value': derived.doubled }, children);
}
export default Component36372;
