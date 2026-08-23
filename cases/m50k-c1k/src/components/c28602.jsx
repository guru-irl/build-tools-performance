import React from 'react';
const LABEL_28602 = 'component_28602';
export function Component28602({ value = 28602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28602, 'data-value': derived.doubled }, children);
}
export default Component28602;
