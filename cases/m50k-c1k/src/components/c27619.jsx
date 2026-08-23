import React from 'react';
const LABEL_27619 = 'component_27619';
export function Component27619({ value = 27619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27619, 'data-value': derived.doubled }, children);
}
export default Component27619;
