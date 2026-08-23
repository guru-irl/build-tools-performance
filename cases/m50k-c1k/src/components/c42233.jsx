import React from 'react';
const LABEL_42233 = 'component_42233';
export function Component42233({ value = 42233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42233, 'data-value': derived.doubled }, children);
}
export default Component42233;
