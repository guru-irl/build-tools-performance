import React from 'react';
const LABEL_12560 = 'component_12560';
export function Component12560({ value = 12560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12560, 'data-value': derived.doubled }, children);
}
export default Component12560;
