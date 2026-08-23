import React from 'react';
const LABEL_27879 = 'component_27879';
export function Component27879({ value = 27879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27879, 'data-value': derived.doubled }, children);
}
export default Component27879;
