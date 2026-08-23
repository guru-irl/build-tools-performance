import React from 'react';
const LABEL_12850 = 'component_12850';
export function Component12850({ value = 12850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12850, 'data-value': derived.doubled }, children);
}
export default Component12850;
