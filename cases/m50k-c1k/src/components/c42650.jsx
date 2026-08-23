import React from 'react';
const LABEL_42650 = 'component_42650';
export function Component42650({ value = 42650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42650, 'data-value': derived.doubled }, children);
}
export default Component42650;
