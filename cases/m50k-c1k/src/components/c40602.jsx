import React from 'react';
const LABEL_40602 = 'component_40602';
export function Component40602({ value = 40602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40602, 'data-value': derived.doubled }, children);
}
export default Component40602;
