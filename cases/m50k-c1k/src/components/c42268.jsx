import React from 'react';
const LABEL_42268 = 'component_42268';
export function Component42268({ value = 42268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42268, 'data-value': derived.doubled }, children);
}
export default Component42268;
