import React from 'react';
const LABEL_27780 = 'component_27780';
export function Component27780({ value = 27780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27780, 'data-value': derived.doubled }, children);
}
export default Component27780;
