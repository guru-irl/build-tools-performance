import React from 'react';
const LABEL_1602 = 'component_1602';
export function Component1602({ value = 1602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1602, 'data-value': derived.doubled }, children);
}
export default Component1602;
