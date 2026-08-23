import React from 'react';
const LABEL_27564 = 'component_27564';
export function Component27564({ value = 27564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27564, 'data-value': derived.doubled }, children);
}
export default Component27564;
