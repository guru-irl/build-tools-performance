import React from 'react';
const LABEL_8778 = 'component_8778';
export function Component8778({ value = 8778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8778, 'data-value': derived.doubled }, children);
}
export default Component8778;
