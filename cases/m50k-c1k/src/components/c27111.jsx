import React from 'react';
const LABEL_27111 = 'component_27111';
export function Component27111({ value = 27111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27111, 'data-value': derived.doubled }, children);
}
export default Component27111;
