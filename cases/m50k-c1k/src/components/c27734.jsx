import React from 'react';
const LABEL_27734 = 'component_27734';
export function Component27734({ value = 27734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27734, 'data-value': derived.doubled }, children);
}
export default Component27734;
