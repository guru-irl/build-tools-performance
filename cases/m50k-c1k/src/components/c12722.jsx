import React from 'react';
const LABEL_12722 = 'component_12722';
export function Component12722({ value = 12722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12722, 'data-value': derived.doubled }, children);
}
export default Component12722;
