import React from 'react';
const LABEL_36602 = 'component_36602';
export function Component36602({ value = 36602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36602, 'data-value': derived.doubled }, children);
}
export default Component36602;
