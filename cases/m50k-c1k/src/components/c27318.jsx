import React from 'react';
const LABEL_27318 = 'component_27318';
export function Component27318({ value = 27318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27318, 'data-value': derived.doubled }, children);
}
export default Component27318;
