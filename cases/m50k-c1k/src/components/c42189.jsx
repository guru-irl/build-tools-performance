import React from 'react';
const LABEL_42189 = 'component_42189';
export function Component42189({ value = 42189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42189, 'data-value': derived.doubled }, children);
}
export default Component42189;
