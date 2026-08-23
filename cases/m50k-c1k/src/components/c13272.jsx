import React from 'react';
const LABEL_13272 = 'component_13272';
export function Component13272({ value = 13272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13272, 'data-value': derived.doubled }, children);
}
export default Component13272;
