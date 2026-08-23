import React from 'react';
const LABEL_34516 = 'component_34516';
export function Component34516({ value = 34516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34516, 'data-value': derived.doubled }, children);
}
export default Component34516;
