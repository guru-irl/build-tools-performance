import React from 'react';
const LABEL_27707 = 'component_27707';
export function Component27707({ value = 27707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27707, 'data-value': derived.doubled }, children);
}
export default Component27707;
