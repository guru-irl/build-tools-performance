import React from 'react';
const LABEL_25525 = 'component_25525';
export function Component25525({ value = 25525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25525, 'data-value': derived.doubled }, children);
}
export default Component25525;
