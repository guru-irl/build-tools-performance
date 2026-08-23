import React from 'react';
const LABEL_27613 = 'component_27613';
export function Component27613({ value = 27613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27613, 'data-value': derived.doubled }, children);
}
export default Component27613;
