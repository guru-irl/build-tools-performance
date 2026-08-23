import React from 'react';
const LABEL_27165 = 'component_27165';
export function Component27165({ value = 27165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27165, 'data-value': derived.doubled }, children);
}
export default Component27165;
