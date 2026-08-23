import React from 'react';
const LABEL_35493 = 'component_35493';
export function Component35493({ value = 35493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35493, 'data-value': derived.doubled }, children);
}
export default Component35493;
