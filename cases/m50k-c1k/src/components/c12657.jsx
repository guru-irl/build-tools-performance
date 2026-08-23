import React from 'react';
const LABEL_12657 = 'component_12657';
export function Component12657({ value = 12657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12657, 'data-value': derived.doubled }, children);
}
export default Component12657;
