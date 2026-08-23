import React from 'react';
const LABEL_12678 = 'component_12678';
export function Component12678({ value = 12678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12678, 'data-value': derived.doubled }, children);
}
export default Component12678;
