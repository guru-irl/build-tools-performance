import React from 'react';
const LABEL_8362 = 'component_8362';
export function Component8362({ value = 8362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8362, 'data-value': derived.doubled }, children);
}
export default Component8362;
