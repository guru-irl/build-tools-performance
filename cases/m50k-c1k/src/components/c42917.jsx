import React from 'react';
const LABEL_42917 = 'component_42917';
export function Component42917({ value = 42917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42917, 'data-value': derived.doubled }, children);
}
export default Component42917;
