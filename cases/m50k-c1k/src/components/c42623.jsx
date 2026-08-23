import React from 'react';
const LABEL_42623 = 'component_42623';
export function Component42623({ value = 42623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42623, 'data-value': derived.doubled }, children);
}
export default Component42623;
