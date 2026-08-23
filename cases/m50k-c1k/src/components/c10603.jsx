import React from 'react';
const LABEL_10603 = 'component_10603';
export function Component10603({ value = 10603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10603, 'data-value': derived.doubled }, children);
}
export default Component10603;
