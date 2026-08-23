import React from 'react';
const LABEL_23372 = 'component_23372';
export function Component23372({ value = 23372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23372, 'data-value': derived.doubled }, children);
}
export default Component23372;
