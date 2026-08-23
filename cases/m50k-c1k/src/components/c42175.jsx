import React from 'react';
const LABEL_42175 = 'component_42175';
export function Component42175({ value = 42175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42175, 'data-value': derived.doubled }, children);
}
export default Component42175;
