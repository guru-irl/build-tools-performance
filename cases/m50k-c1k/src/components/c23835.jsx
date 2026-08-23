import React from 'react';
const LABEL_23835 = 'component_23835';
export function Component23835({ value = 23835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23835, 'data-value': derived.doubled }, children);
}
export default Component23835;
