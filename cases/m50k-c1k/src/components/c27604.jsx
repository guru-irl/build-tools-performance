import React from 'react';
const LABEL_27604 = 'component_27604';
export function Component27604({ value = 27604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27604, 'data-value': derived.doubled }, children);
}
export default Component27604;
