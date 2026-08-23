import React from 'react';
const LABEL_6372 = 'component_6372';
export function Component6372({ value = 6372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6372, 'data-value': derived.doubled }, children);
}
export default Component6372;
