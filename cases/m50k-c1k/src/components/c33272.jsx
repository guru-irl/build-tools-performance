import React from 'react';
const LABEL_33272 = 'component_33272';
export function Component33272({ value = 33272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33272, 'data-value': derived.doubled }, children);
}
export default Component33272;
