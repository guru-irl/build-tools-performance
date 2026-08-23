import React from 'react';
const LABEL_42796 = 'component_42796';
export function Component42796({ value = 42796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42796, 'data-value': derived.doubled }, children);
}
export default Component42796;
