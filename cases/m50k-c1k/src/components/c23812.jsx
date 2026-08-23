import React from 'react';
const LABEL_23812 = 'component_23812';
export function Component23812({ value = 23812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23812, 'data-value': derived.doubled }, children);
}
export default Component23812;
