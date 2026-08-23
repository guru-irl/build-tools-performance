import React from 'react';
const LABEL_3602 = 'component_3602';
export function Component3602({ value = 3602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3602, 'data-value': derived.doubled }, children);
}
export default Component3602;
