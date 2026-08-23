import React from 'react';
const LABEL_27689 = 'component_27689';
export function Component27689({ value = 27689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27689, 'data-value': derived.doubled }, children);
}
export default Component27689;
