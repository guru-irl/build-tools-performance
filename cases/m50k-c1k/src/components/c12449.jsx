import React from 'react';
const LABEL_12449 = 'component_12449';
export function Component12449({ value = 12449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12449, 'data-value': derived.doubled }, children);
}
export default Component12449;
