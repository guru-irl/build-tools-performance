import React from 'react';
const LABEL_23657 = 'component_23657';
export function Component23657({ value = 23657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23657, 'data-value': derived.doubled }, children);
}
export default Component23657;
