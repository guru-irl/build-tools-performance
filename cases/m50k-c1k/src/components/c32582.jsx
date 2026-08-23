import React from 'react';
const LABEL_32582 = 'component_32582';
export function Component32582({ value = 32582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32582, 'data-value': derived.doubled }, children);
}
export default Component32582;
