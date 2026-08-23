import React from 'react';
const LABEL_42913 = 'component_42913';
export function Component42913({ value = 42913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42913, 'data-value': derived.doubled }, children);
}
export default Component42913;
