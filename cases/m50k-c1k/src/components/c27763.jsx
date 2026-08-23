import React from 'react';
const LABEL_27763 = 'component_27763';
export function Component27763({ value = 27763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27763, 'data-value': derived.doubled }, children);
}
export default Component27763;
