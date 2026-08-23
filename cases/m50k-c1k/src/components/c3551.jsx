import React from 'react';
const LABEL_3551 = 'component_3551';
export function Component3551({ value = 3551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3551, 'data-value': derived.doubled }, children);
}
export default Component3551;
