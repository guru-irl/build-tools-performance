import React from 'react';
const LABEL_27776 = 'component_27776';
export function Component27776({ value = 27776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27776, 'data-value': derived.doubled }, children);
}
export default Component27776;
