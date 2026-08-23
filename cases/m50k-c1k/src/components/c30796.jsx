import React from 'react';
const LABEL_30796 = 'component_30796';
export function Component30796({ value = 30796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30796, 'data-value': derived.doubled }, children);
}
export default Component30796;
