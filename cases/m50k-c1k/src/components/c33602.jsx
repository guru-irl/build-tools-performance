import React from 'react';
const LABEL_33602 = 'component_33602';
export function Component33602({ value = 33602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33602, 'data-value': derived.doubled }, children);
}
export default Component33602;
