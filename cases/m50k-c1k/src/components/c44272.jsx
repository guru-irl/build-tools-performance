import React from 'react';
const LABEL_44272 = 'component_44272';
export function Component44272({ value = 44272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44272, 'data-value': derived.doubled }, children);
}
export default Component44272;
