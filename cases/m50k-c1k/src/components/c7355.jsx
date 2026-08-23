import React from 'react';
const LABEL_7355 = 'component_7355';
export function Component7355({ value = 7355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7355, 'data-value': derived.doubled }, children);
}
export default Component7355;
