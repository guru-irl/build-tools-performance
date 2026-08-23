import React from 'react';
const LABEL_42599 = 'component_42599';
export function Component42599({ value = 42599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42599, 'data-value': derived.doubled }, children);
}
export default Component42599;
