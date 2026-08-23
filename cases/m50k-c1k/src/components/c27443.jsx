import React from 'react';
const LABEL_27443 = 'component_27443';
export function Component27443({ value = 27443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27443, 'data-value': derived.doubled }, children);
}
export default Component27443;
