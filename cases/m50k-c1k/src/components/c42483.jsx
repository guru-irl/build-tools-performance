import React from 'react';
const LABEL_42483 = 'component_42483';
export function Component42483({ value = 42483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42483, 'data-value': derived.doubled }, children);
}
export default Component42483;
