import React from 'react';
const LABEL_6496 = 'component_6496';
export function Component6496({ value = 6496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6496, 'data-value': derived.doubled }, children);
}
export default Component6496;
