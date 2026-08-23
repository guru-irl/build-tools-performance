import React from 'react';
const LABEL_23272 = 'component_23272';
export function Component23272({ value = 23272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23272, 'data-value': derived.doubled }, children);
}
export default Component23272;
