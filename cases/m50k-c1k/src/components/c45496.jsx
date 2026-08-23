import React from 'react';
const LABEL_45496 = 'component_45496';
export function Component45496({ value = 45496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45496, 'data-value': derived.doubled }, children);
}
export default Component45496;
