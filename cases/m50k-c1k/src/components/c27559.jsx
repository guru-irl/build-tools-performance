import React from 'react';
const LABEL_27559 = 'component_27559';
export function Component27559({ value = 27559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27559, 'data-value': derived.doubled }, children);
}
export default Component27559;
