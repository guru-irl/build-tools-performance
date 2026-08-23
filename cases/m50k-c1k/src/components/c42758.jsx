import React from 'react';
const LABEL_42758 = 'component_42758';
export function Component42758({ value = 42758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42758, 'data-value': derived.doubled }, children);
}
export default Component42758;
