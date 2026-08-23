import React from 'react';
const LABEL_21194 = 'component_21194';
export function Component21194({ value = 21194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21194, 'data-value': derived.doubled }, children);
}
export default Component21194;
