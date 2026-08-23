import React from 'react';
const LABEL_10372 = 'component_10372';
export function Component10372({ value = 10372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10372, 'data-value': derived.doubled }, children);
}
export default Component10372;
