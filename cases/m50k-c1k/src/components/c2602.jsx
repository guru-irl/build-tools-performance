import React from 'react';
const LABEL_2602 = 'component_2602';
export function Component2602({ value = 2602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2602, 'data-value': derived.doubled }, children);
}
export default Component2602;
