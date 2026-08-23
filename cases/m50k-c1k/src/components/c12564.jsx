import React from 'react';
const LABEL_12564 = 'component_12564';
export function Component12564({ value = 12564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12564, 'data-value': derived.doubled }, children);
}
export default Component12564;
