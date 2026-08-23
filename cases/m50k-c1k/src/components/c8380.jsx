import React from 'react';
const LABEL_8380 = 'component_8380';
export function Component8380({ value = 8380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8380, 'data-value': derived.doubled }, children);
}
export default Component8380;
