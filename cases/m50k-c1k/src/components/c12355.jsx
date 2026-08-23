import React from 'react';
const LABEL_12355 = 'component_12355';
export function Component12355({ value = 12355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12355, 'data-value': derived.doubled }, children);
}
export default Component12355;
