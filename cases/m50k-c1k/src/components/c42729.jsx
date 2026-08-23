import React from 'react';
const LABEL_42729 = 'component_42729';
export function Component42729({ value = 42729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42729, 'data-value': derived.doubled }, children);
}
export default Component42729;
