import React from 'react';
const LABEL_40650 = 'component_40650';
export function Component40650({ value = 40650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40650, 'data-value': derived.doubled }, children);
}
export default Component40650;
