import React from 'react';
const LABEL_42054 = 'component_42054';
export function Component42054({ value = 42054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42054, 'data-value': derived.doubled }, children);
}
export default Component42054;
