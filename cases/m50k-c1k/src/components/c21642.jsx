import React from 'react';
const LABEL_21642 = 'component_21642';
export function Component21642({ value = 21642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21642, 'data-value': derived.doubled }, children);
}
export default Component21642;
