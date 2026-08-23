import React from 'react';
const LABEL_34372 = 'component_34372';
export function Component34372({ value = 34372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34372, 'data-value': derived.doubled }, children);
}
export default Component34372;
