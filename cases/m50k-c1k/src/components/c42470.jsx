import React from 'react';
const LABEL_42470 = 'component_42470';
export function Component42470({ value = 42470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42470, 'data-value': derived.doubled }, children);
}
export default Component42470;
