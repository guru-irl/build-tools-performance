import React from 'react';
const LABEL_6602 = 'component_6602';
export function Component6602({ value = 6602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6602, 'data-value': derived.doubled }, children);
}
export default Component6602;
