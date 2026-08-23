import React from 'react';
const LABEL_42753 = 'component_42753';
export function Component42753({ value = 42753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42753, 'data-value': derived.doubled }, children);
}
export default Component42753;
