import React from 'react';
const LABEL_27050 = 'component_27050';
export function Component27050({ value = 27050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27050, 'data-value': derived.doubled }, children);
}
export default Component27050;
