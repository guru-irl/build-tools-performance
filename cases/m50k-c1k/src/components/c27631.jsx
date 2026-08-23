import React from 'react';
const LABEL_27631 = 'component_27631';
export function Component27631({ value = 27631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27631, 'data-value': derived.doubled }, children);
}
export default Component27631;
