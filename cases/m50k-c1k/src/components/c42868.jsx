import React from 'react';
const LABEL_42868 = 'component_42868';
export function Component42868({ value = 42868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42868, 'data-value': derived.doubled }, children);
}
export default Component42868;
