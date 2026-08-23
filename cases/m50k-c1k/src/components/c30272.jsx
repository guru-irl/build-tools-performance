import React from 'react';
const LABEL_30272 = 'component_30272';
export function Component30272({ value = 30272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30272, 'data-value': derived.doubled }, children);
}
export default Component30272;
