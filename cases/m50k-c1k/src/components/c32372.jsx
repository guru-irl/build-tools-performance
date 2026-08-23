import React from 'react';
const LABEL_32372 = 'component_32372';
export function Component32372({ value = 32372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32372, 'data-value': derived.doubled }, children);
}
export default Component32372;
