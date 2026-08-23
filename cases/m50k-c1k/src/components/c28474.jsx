import React from 'react';
const LABEL_28474 = 'component_28474';
export function Component28474({ value = 28474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28474, 'data-value': derived.doubled }, children);
}
export default Component28474;
