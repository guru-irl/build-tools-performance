import React from 'react';
const LABEL_42504 = 'component_42504';
export function Component42504({ value = 42504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42504, 'data-value': derived.doubled }, children);
}
export default Component42504;
