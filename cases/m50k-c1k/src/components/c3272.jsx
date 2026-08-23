import React from 'react';
const LABEL_3272 = 'component_3272';
export function Component3272({ value = 3272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3272, 'data-value': derived.doubled }, children);
}
export default Component3272;
