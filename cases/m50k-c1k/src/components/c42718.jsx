import React from 'react';
const LABEL_42718 = 'component_42718';
export function Component42718({ value = 42718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42718, 'data-value': derived.doubled }, children);
}
export default Component42718;
