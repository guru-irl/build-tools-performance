import React from 'react';
const LABEL_19496 = 'component_19496';
export function Component19496({ value = 19496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19496, 'data-value': derived.doubled }, children);
}
export default Component19496;
