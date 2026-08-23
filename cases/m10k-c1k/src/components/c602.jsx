import React from 'react';
const LABEL_602 = 'component_602';
export function Component602({ value = 602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_602, 'data-value': derived.doubled }, children);
}
export default Component602;
