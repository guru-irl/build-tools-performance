import React from 'react';
const LABEL_27187 = 'component_27187';
export function Component27187({ value = 27187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27187, 'data-value': derived.doubled }, children);
}
export default Component27187;
