import React from 'react';
const LABEL_27290 = 'component_27290';
export function Component27290({ value = 27290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27290, 'data-value': derived.doubled }, children);
}
export default Component27290;
